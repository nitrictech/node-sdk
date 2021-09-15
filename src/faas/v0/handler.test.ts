
import { createHandler } from './handler';

describe('createHandler', () => {

	describe('Given no functions are provided', () => {
		const nofunc = createHandler;
		describe('When calling createHandler', () => {
			it("should reject", async () => {
				await expect(nofunc()).rejects.toThrowError('at least one handler function must be provided');
			});
		});
	});

	describe('Given a non-function is provided as a handler', () => {
		const notfunc = () => createHandler({} as any);
		describe('When calling createHandler', () => {
			it("should reject", async () => {
				await expect(notfunc()).rejects.toThrow('all handlers must functions');
			});
		});
	});

	describe('Given a single function is provided', () => {
		const funSpy = jest.fn();
		const onefunc = () => createHandler(funSpy);

		describe('When calling createHandler', () => {
			const execFunc = onefunc();

			it('should return a function', () => {
				expect(typeof execFunc).toBe('function');
			});

			describe('When executing the returned function', () => {
				beforeEach(async () => {
					await execFunc(null);
				});

				afterEach(() => {
					funSpy.mockClear();
				});

				it('should execute the provided function', () => {
					expect(funSpy).toBeCalled();
				});
			});
		});
	});

	describe('Given multiple functions are provided', () => {
		const funSpy = jest.fn();
		const one = async (ctx, next) => {
			funSpy(1);
			await next(ctx);
		}
		const two = async (ctx, next) => {
			funSpy(2);
			await next(ctx);
		}
		const multiFunc = () => createHandler(one, two);

		describe('When called createHandler', () => {
			const execFunc = multiFunc();

			it('Should return a function', () => {
				expect(typeof execFunc).toBe('function');
			});
			
			describe('When executing the returned function', () => {
				beforeEach(async () => {
					await execFunc(null);
				});

				afterEach(() => {
					funSpy.mockClear();
				});

				it('should execute the functions in the exact order provided', () => {
					expect(funSpy.mock.calls).toEqual([
						[1],
						[2]
					]);
				});
			});

			describe('When executing the function multiple times', () => {
				beforeEach(async () => {
					await execFunc(null);
					await execFunc(null);
				});

				it('should produce the same result each time', () => {
					expect(funSpy.mock.calls).toEqual([
						// first run
						[1],
						[2],
						// second run
						[1],
						[2]
					]);
				});
			})
		})
	});

	describe('Given multiple create handlers are provided', () => {
		const funSpy = jest.fn();

		// Calls to funSpy provide the following args for verification:
		//  arg 1: nesting level (first or second), since there are multiple calls to 'createHandler'
		//  arg 2: before/after calling next
		//  arg 3: function number within the nesting level (e.g. 1 or 2)
		const handler = createHandler(createHandler(
			async (ctx, next) => {
				funSpy('first', 'before', 1);
				const c = await next(ctx);
				funSpy('first', 'after', 1);
				return c;
			},
			async (ctx, next) => {
				funSpy('first', 'before', 2);
				const c = await next(ctx);
				funSpy('first', 'after', 2);
				return c;
			},
		), createHandler(
			async (ctx, next) => {
				funSpy('second', 'before', 1);
				const c = await next(ctx);
				funSpy('second', 'after', 1);
				return c;
			},
			async (ctx, next) => {
				funSpy('second', 'before', 2);
				const c = await next(ctx);
				funSpy('second', 'after', 2);
				return c;
			},
		));

		it('should call in the specified order', async () => {
			await handler(null);

			expect(funSpy.mock.calls).toEqual([
				['first', 'before', 1],
				['first', 'before', 2],
				['second', 'before', 1],
				['second', 'before', 2],
				['second', 'after', 2],
				['second', 'after', 1],
				['first', 'after', 2],
				['first', 'after', 1],
			]);
		})
	});

});	