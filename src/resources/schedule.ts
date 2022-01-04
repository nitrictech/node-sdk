import { EventMiddleware, Faas } from "../faas";

type Frequency = "days" | "hours" | "minutes";

const FREQUENCIES: Frequency[] = ["days", "hours", "minutes"];

export class RateWorkerOptions {
	public readonly description: string;
	public readonly rate: number;
	public readonly frequency: Frequency;

	constructor(description: string, rate: number, freq: Frequency) {
		this.description = description;
		this.rate = rate;
		this.frequency = freq;
	}
}

/**
 * Provides a rate based schedule
 * 
 * Rates provide a simple expressive way to define schedules
 */
class Rate {
	public readonly schedule: Schedule;
	private readonly faas: Faas;

	constructor(schedule: Schedule, rate: string, ...mw: EventMiddleware[]) {
		const [_, frequency] = rate.split(" ");
		const normalizedFrequency = frequency.toLocaleLowerCase() as Frequency;

		// This will automatically parse the int off of a valid rate expression e.g. "10 minutes" === 10
		const rateNum = parseInt(rate);

		if (isNaN(rateNum)) {
			throw new Error("invalid rate expression, expression must begin with a number");
		}

		if (!FREQUENCIES.includes(normalizedFrequency)) {
			throw new Error(`invalid rate expression, frequency must be one of ${FREQUENCIES}, received ${frequency}`)
		}

		this.schedule = schedule;
		this.faas = new Faas(
			new RateWorkerOptions(schedule['description'], rateNum, normalizedFrequency)
		).event(...mw);
	}

	private async start(): Promise<void> {
		return this.faas.start();
	}
}

/**
 * Providers a scheduled worker.
 */
class Schedule {
	private readonly description: string;

	constructor(description: string) {
		this.description = description;
	}

	/**
	 * Run this schedule on the provided frequency.
	 * 
	 * @param rate to run the schedule, e.g. '7 days'. All rates accept a number and a frequency. Valid frequencies are 'days', 'hours' or 'minutes'.
	 * @param mw the handler/middleware to run on a schedule
	 * @returns {Promise} that resolves when the schedule worker stops running.
	 */
	every = (rate: string, ...mw: EventMiddleware[]): Promise<void> => {
		// handle singular frequencies. e.g. schedule('something').every('day')
		if(FREQUENCIES.indexOf(`${rate}s` as Frequency) !== -1) {
			rate = `1 ${rate}s` // 'day' becomes '1 days'
		}

		const r = new Rate(this, rate, ...mw);
		// Start the new rate immediately
		return r['start']();
	}
}

/**
 * Provides a new schedule, which can be configured with a rate/cron and a callback to run on the schedule.
 * 
 * @param description of the schedule, e.g. "Nightly"
 * @returns 
 */
export const schedule = (description: string): Schedule => {
	return new Schedule(description);
};
