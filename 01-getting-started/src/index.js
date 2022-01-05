module.exports.handler = async (event) => {
    const { id } = event.pathParameters;

    // Place your business logic call here.

    return {
        statusCode: 200,
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            id: id,
            name: "Jane Doe",
	    age: 18
        }),
    }
}
