
import { HttpContext, EventContext } from './trigger';
import { createHandler, HttpHandler, NextHandle } from './function';

describe('crazy function shenanigans', () => {

	it('should call a crazy function!!!!', async () => {
		const httpHandler = createHandler(
			async (ctx: HttpContext, next: NextHandle<HttpContext>) => {
				console.log("func 1 before next");
				const c = await next(ctx);
				console.log("func 1 after next");
				return c;
			},
			async (ctx: HttpContext, next: NextHandle<HttpContext>) => {
				console.log("func 1 before next");
				const c = await next(ctx);
				console.log("func 1 after next");
				return c;
			},
			
		)
		
		const handler = createHandler(
			createHandler(
				async (ctx, next) => {
					console.log("func 1 before next");
					const c = await next(ctx);
					console.log("func 1 after next");
					return c;
				},
				async (ctx, next) => {
					console.log("func 2 before next");
					const c = await next(ctx);
					console.log("func 2 after next");
					return c;
				},
				async (ctx, next) => {
					console.log("func 3 before next");
					const c = await next(ctx);
					console.log("func 3 after next");
					return c;
				} 
			),
			createHandler(
				async (ctx, next) => {
					console.log("func 4 before next");
					const c = await next(ctx);
					console.log("func 4 after next");
					return c;
				},
				async (ctx, next) => {
					console.log("func 5 before next");
					const c = await next(ctx);
					console.log("func 5 after next");
					return c;
				} 
			),
		);

		const ctx = await handler({ a: 123 }, async (ctx) => ctx);

		console.log(ctx);
	});

});	