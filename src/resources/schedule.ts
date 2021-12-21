import { EventMiddleware, Faas } from "../faas";

type Frequency = "days" | "hours" | "minutes";

const FREQUENCIES: Frequency[] = ["days", "hours", "minutes"];

class RateWorkerOptions {
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
 * Rate
 * 
 * rates provide a simple expressive way to define schedules
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
			throw new Error(`invalid rate expression frequency must be one of ${FREQUENCIES}, recieved ${frequency}`)
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
 * 
 */
class Schedule {
	private readonly description: string;

	constructor(description: string) {
		this.description = description;
	}

	every = (rate: string, ...mw: EventMiddleware[]): Promise<void> => {
		const r = new Rate(this, rate, ...mw);
		// Start the new rate immediately
		return r['start']();
	}
}

export const schedule = (description: string): Schedule => {
	return new Schedule(description);
};
