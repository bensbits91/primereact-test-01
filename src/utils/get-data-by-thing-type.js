/**
 * todo:
 * should these be set using setters on the model before save?
 * or getters?
 * should there be a schema for each type?
 */

const getDataByThingType = (thing) => {
    const unknownData = {
        type,
        imgPath: '',
        thingName: '',
        thingDescription: '',
        iconCode: 'pi pi-question'
    };

    if (!thing) return unknownData;

    const { type, name, imgPath, externalData } = thing;
    const { data } = externalData || {};

    switch (type) {
        case 'Book':
            return {
                type,
                imgPath: imgPath || data?.volumeInfo?.imageLinks.thumbnail,
                thingName: data?.volumeInfo?.title || name,
                thingDescription: data?.volumeInfo?.description,
                iconCode: 'pi pi-book'
            };
        case 'Movie':
        case 'TV':
            const filmImgCode = imgPath || data?.poster_path;
            const filmImgPath = filmImgCode
                ? `https://image.tmdb.org/t/p/w342${filmImgCode}`
                : '';
            const filmIconCode = type === 'TV' ? 'pi pi-desktop' : 'pi pi-video';
            return {
                type,
                imgPath: filmImgPath,
                thingName: data?.name || data?.title || name,
                thingDescription: data?.overview,
                iconCode: filmIconCode
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
            return unknownData;
    }
};

export default getDataByThingType;
