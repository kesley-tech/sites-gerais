async function tempo(request, response){
    const apiSecret = process.env.CONVERTKIT_API_SECRET;
    const dynamicDate = new Date();

    const subscribersResponse = await fetch(`https://api.convertkit.com/v3/subscribers?api_secret=${apiSecret}`);
    const subscribersResoponseJson = await subscribersResponse.json();
    const error = subscribersResoponseJson.error;

    response.setHeader('Cache-Control', 's-maxage=10, stale-while-revalidate');

    response.json({
        date: dynamicDate.toGMTString(),
        error: error
    });
}

export default tempo;