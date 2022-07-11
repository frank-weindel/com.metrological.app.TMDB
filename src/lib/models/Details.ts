import { Genre } from "../types";

export interface DetailsData {
    adult: any;
    backdrop_path: any;
    belongs_to_collection: any;
    budget: any;
    genres: Genre[];
    homepage: any;
    id: any;
    imdb_id: any;
    original_language: any;
    original_title: any;
    overview: any;
    popularity: any;
    poster_path: any;
    production_companies: any;
    production_countries: any;
    release_date: any;
    revenue: any;
    runtime: any;
    spoken_languages: any;
    status: any;
    tagline: any;
    title: string;
    video: any;
    vote_average: any;
    vote_count: any;

    // Extras
    name: string;
    first_air_date: any;
    _video: any;
}

export default class Details {
    _adult: any;
    _backdrop_path: any;
    _belong_to_collection: any;
    _budget: any;
    _genres: Genre[];
    _homepage: any;
    _id: any;
    _imdb_id: any;
    _original_language: any;
    _original_title: any;
    _overview: any;
    _popularity: any;
    _poster_path: any;
    _production_companies: any;
    _production_countries: any;
    _release_date: any;
    _revenue: any;
    _runtime: any;
    _spoken_languages: any;
    _status: any;
    _tagline: any;
    _title: string;
    _video: any;
    _vote_average: any;
    _vote_count: any;

    constructor(obj: DetailsData){
        this._adult = obj.adult;
        this._backdrop_path = obj.backdrop_path;
        this._belong_to_collection = obj.belongs_to_collection;
        this._budget = obj.budget;
        this._genres = obj.genres;
        this._homepage = obj.homepage;
        this._id = obj.id;
        this._imdb_id = obj.imdb_id;
        this._original_language = obj.original_language;
        this._original_title = obj.original_title;
        this._overview = obj.overview;
        this._popularity = obj.popularity;
        this._poster_path = obj.poster_path;
        this._production_companies = obj.production_companies;
        this._production_countries = obj.production_countries;
        this._release_date = obj.release_date || obj.first_air_date;
        this._revenue = obj.revenue;
        this._runtime = obj.runtime;
        this._spoken_languages = obj.spoken_languages;
        this._status = obj.status;
        this._tagline = obj.tagline;
        this._title = obj.title || obj.name;
        this._video = obj._video;
        this._vote_average = obj.vote_average;
        this._vote_count = obj.vote_count;
    }

    get adult() {
        return this._adult;
    }

    get background() {
        return this._backdrop_path;
    }

    get belongToCollection() {
        return this._belong_to_collection;
    }

    get budget() {
        return this._budget;
    }

    get genres(){
        return this._genres;
    }

    get genresAsString(){
        let genres = ``;
        this._genres.forEach((genre, index) => {
            if (index > 0) {
                genres += ` | ${genre.name}`
            } else {
                genres += `${genre.name}`
            }
        });
        return genres === '' ? "-" : genres;
    }

    get homepage() {
        return this._homepage;
    }

    get id() {
        return this._id;
    }

    get imdbId() {
        return this._imdb_id;
    }

    get originalLanguage() {
        return this._original_language;
    }

    get originalTitle() {
        return this._original_title;
    }

    get overview() {
        return this._overview;
    }

    get popularity() {
        return this._popularity;
    }

    get poster() {
        return this._poster_path;
    }

    get productionCompanies() {
        return this._production_companies;
    }

    get productionCountries() {
        return this._production_countries;
    }

    get releaseDate() {
        return this._release_date;
    }

    get formattedReleaseDate() {
        if (!this._release_date) {
            return `Date not available`;
        } else {
            const date = new Date(this._release_date);
            return `${date.toLocaleString('default', { month: 'long' })} ${date.getDate()} ${date.getFullYear()}`;
        }
    }

    get revenue() {
        return this._revenue;
    }

    get runtime() {
        return this._runtime;
    }

    get spokenLanguages() {
        return this._spoken_languages;
    }

    get status() {
        return this._status;
    }

    get tagline() {
        return this._tagline;
    }

    get title() {
        return this._title;
    }

    get video() {
        return this._video;
    }

    get voteAverage() {
        return this._vote_average;
    }

    get voteCount() {
        return this._vote_count;
    }
}