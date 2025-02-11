/**
 * todo:
 * should these be set using setters on the model before save?
 * or getters?
 * should there be a schema for each type?
 */
import getGenreNames from './genre';

const getDataByThingType = (thing) => {
    const unknownData = {
        country: '',
        date: '',
        genres: '',
        iconCode: 'pi pi-question',
        imgPath: '',
        language: '',
        thingDescription: '',
        thingName: '',
        type
    };

    if (!thing) return unknownData;

    const { type, name, imgPath, externalData } = thing;
    const { data } = externalData || {};

    switch (type) {
        case 'Book':
            return {
                author: data?.volumeInfo?.authors?.join(', '),
                country: data?.saleInfo?.country,
                date: data?.volumeInfo?.publishedDate,
                genres: getGenreNames(data?.volumeInfo?.categories, type),
                iconCode: 'pi pi-book',
                imgPath: imgPath || data?.volumeInfo?.imageLinks.thumbnail,
                language: data?.volumeInfo?.language,
                thingDescription: data?.volumeInfo?.description,
                thingName: data?.volumeInfo?.title || name,
                type
            };
        case 'Movie':
        case 'TV':
            const filmImgCode = imgPath || data?.poster_path;
            const filmImgPath = filmImgCode
                ? `https://image.tmdb.org/t/p/w342${filmImgCode}`
                : '';
            const filmIconCode = type === 'TV' ? 'pi pi-desktop' : 'pi pi-video';
            return {
                country: data?.origin_country ? (data?.origin_country).join(', ') : '',
                date: data?.release_date || data?.first_air_date,
                genres: getGenreNames(data?.genre_ids, type),
                iconCode: filmIconCode,
                imgPath: filmImgPath,
                language: data?.original_language,
                thingDescription: data?.overview,
                thingName: data?.name || data?.title || name,
                type
            };
        case 'Video Game':
            return {
                country: '',
                date: data?.original_release_date,
                iconCode: 'pi pi-discord',
                imgPath: data?.image.small_url,
                language: '',
                thingDescription: data?.description || data?.deck,
                thingName: data?.name || name,
                type
            };
        default:
            return unknownData;
    }
};

export default getDataByThingType;
