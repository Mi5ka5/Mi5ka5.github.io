import { chroma } from '$lib/utils/chromaClient';

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
	const { id, name } = await request.json();

	let collection = await chroma.getCollection({
		name
	});
	await collection.delete({
		ids: [id] //ids
	});

	return new Response(JSON.stringify({ status: 200 }));
}
