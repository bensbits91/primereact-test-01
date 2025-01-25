/**
 * todo:
 * should these be set using setters on the model before save?
 * or getters?
 */

const getDataByThingType = (thing, searchResult) => {
    const item = thing.thing || thing; // handling the case where thing is passed in directly (ui.js)
    const { type, name } = item || {};
    const data = searchResult || item.externalData?.data;

    switch (type) {
        // todo: should I desctructure data in each case?
        case 'Book':
            return {
                type,
                imgPath: data?.volumeInfo?.imageLinks.thumbnail,
                thingName: data?.volumeInfo?.title || name,
                thingDescription: data?.volumeInfo?.description,
                iconCode: 'pi pi-book'
            };
        case 'Movie':
            return {
                type,
                imgPath: `https://image.tmdb.org/t/p/w342${data?.poster_path}`,
                thingName: data?.name || name,
                thingDescription: data?.overview,
                iconCode: 'pi pi-video'
            };
        case 'TV':
            return {
                type,
                imgPath: `https://image.tmdb.org/t/p/w342${data?.poster_path}`,
                thingName: data?.name || name,
                thingDescription: data?.overview,
                iconCode: 'pi pi-desktop'
            };
        case 'Video Game':
            return {
                type,
                imgPath: data?.image.small_url,
                thingName: data?.name || name,
                thingDescription: data?.description || data?.deck,
                iconCode: 'pi pi-discord'
            };
        default:
            return {
                type,
                imgPath: '',
                thingName: '',
                thingDescription: '',
                iconCode: 'pi pi-question'
            };
    }
};

export default getDataByThingType;
