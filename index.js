class SportsDbApi {
    #apiKey;
    #fetch;

    constructor(options) {
        this.#apiKey = options?.apiKey ?? 123;
        this.#fetch = options?.fetch ?? globalThis.fetch;
    }

    async getTeamByName(name) {
        name = makeUrl(name);
        return this.#fetch(`https://www.thesportsdb.com/api/v1/json/${this.#apiKey}/searchteams.php?t=${name}`).then(r => r.json());
    }

    async getTeamByShortCode(code) {
        code = makeUrl(code);
        return this.#fetch(`https://www.thesportsdb.com/api/v1/json/${this.#apiKey}/searchteams.php?sname=${code}`).then(r => r.json());
    }

    async getAllPlayersByTeam(name) {
        name = makeUrl(name);
        return this.#fetch(`https://www.thesportsdb.com/api/v1/json/${this.#apiKey}/searchplayers.php?t=${name}`).then(r => r.json());
    }

    async getPlayerByName(name, team) {
        name = makeUrl(name);
        team = makeUrl(team);
        var params = [];
        params.push(`p=${name}`);
        if (team) params.push(`t=${team}`);
        return this.#fetch(`https://www.thesportsdb.com/api/v1/json/${this.#apiKey}/searchplayers.php?${params.join('&')}`).then(r => r.json());
    }

    async getEventByName(name, season) {
        name = makeUrl(name);
        season = makeUrl(season);
        var params = [];
        params.push(`e=${name}`);
        if (season) params.push(`s=${season}`);
        return this.#fetch(`https://www.thesportsdb.com/api/v1/json/${this.#apiKey}/searchevents.php?${params.join('&')}`).then(r => r.json());
    }

    async getSportsList() {
        return this.#fetch(`https://www.thesportsdb.com/api/v1/json/${this.#apiKey}/all_sports.php`).then(r => r.json());
    }

    async getLeagueList() {
        return this.#fetch(`https://www.thesportsdb.com/api/v1/json/${this.#apiKey}/all_leagues.php`).then(r => r.json());
    }

    async getCountryList() {
        return this.#fetch(`https://www.thesportsdb.com/api/v1/json/${this.#apiKey}/all_countries.php`).then(r => r.json());
    }

    async getLeagueListByCountry(country, sport) {
        country = makeUrl(country);
        sport = makeUrl(sport);
        var params = [];
        params.push(`c=${country}`);
        if (sport) params.push(`s=${sport}`);
        return this.#fetch(`https://www.thesportsdb.com/api/v1/json/${this.#apiKey}/search_all_leagues.php?${params.join('&')}`).then(r => r.json());
    }

    async getSeasonsInLeagueById(id) {
        return this.#fetch(`https://www.thesportsdb.com/api/v1/json/${this.#apiKey}/search_all_seasons.php?id=${id}`).then(r => r.json());
    }

    async getTeamsByLeagueName(name) {
        name = makeUrl(name);
        return this.#fetch(`https://www.thesportsdb.com/api/v1/json/${this.#apiKey}/search_all_teams.php?l=${name}`).then(r => r.json());
    }

    async getTeamsByCountryAndSport(sport, country) {
        country = makeUrl(country);
        sport = makeUrl(sport);
        return this.#fetch(`https://www.thesportsdb.com/api/v1/json/${this.#apiKey}/search_all_teams.php?s=${sport}&c=${country}`).then(r => r.json());
    }

    async getPlayersByTeamId(id) {
        return this.#fetch(`https://www.thesportsdb.com/api/v1/json/${this.#apiKey}/lookup_all_players.php?id=${id}`).then(r => r.json());
    }

    async getUsersLoved(user) {
        user = makeUrl(user);
        return this.#fetch(`https://www.thesportsdb.com/api/v1/json/${this.#apiKey}/searchloves.php?u=${user}`).then(r => r.json());
    }

    async getLeagueDetailsById(id) {
        return this.#fetch(`https://www.thesportsdb.com/api/v1/json/${this.#apiKey}/lookupleague.php?id=${id}`).then(r => r.json());
    }

    async getTeamDetailsById(id) {
        return this.#fetch(`https://www.thesportsdb.com/api/v1/json/${this.#apiKey}/lookupteam.php?id=${id}`).then(r => r.json());
    }

    async getPlayerDetailsById(id) {
        return this.#fetch(`https://www.thesportsdb.com/api/v1/json/${this.#apiKey}/lookupplayer.php?id=${id}`).then(r => r.json());
    }

    async getEventDetailsById(id) {
        return this.#fetch(`https://www.thesportsdb.com/api/v1/json/${this.#apiKey}/lookupevent.php?id=${id}`).then(r => r.json());
    }

    async getPlayerHonoursById(id) {
        return this.#fetch(`https://www.thesportsdb.com/api/v1/json/${this.#apiKey}/lookuphonors.php?id=${id}`).then(r => r.json());
    }

    async getPlayerFormerTeamsById(id) {
        return this.#fetch(`https://www.thesportsdb.com/api/v1/json/${this.#apiKey}/lookupformerteams.php?id=${id}`).then(r => r.json());
    }

    async getPlayerContractsById(id) {
        return this.#fetch(`https://www.thesportsdb.com/api/v1/json/${this.#apiKey}/lookupcontracts.php?id=${id}`).then(r => r.json());
    }

    async getEventResultsById(id) {
        return this.#fetch(`https://www.thesportsdb.com/api/v1/json/${this.#apiKey}/eventresults.php?id=${id}`).then(r => r.json());
    }

    async getTvEventById(id) {
        return this.#fetch(`https://www.thesportsdb.com/api/v1/json/${this.#apiKey}/lookuptv.php?id=${id}`).then(r => r.json());
    }

    async getLookupTableByLeagueIdAndSeason(id, season) {
        return this.#fetch(`https://www.thesportsdb.com/api/v1/json/${this.#apiKey}/lookuptable.php?l=${id}&s=${season}`).then(r => r.json());
    }

    async getNext5EventsByTeamId(id) {
        return this.#fetch(`https://www.thesportsdb.com/api/v1/json/${this.#apiKey}/eventsnext.php?id=${id}`).then(r => r.json());
    }

    async getNext15EventsByLeagueId(id) {
        return this.#fetch(`https://www.thesportsdb.com/api/v1/json/${this.#apiKey}/eventsnextleague.php?id=${id}`).then(r => r.json());
    }

    async getPast5EventsByTeamId(id) {
        return this.#fetch(`https://www.thesportsdb.com/api/v1/json/${this.#apiKey}/eventslast.php?id=${id}`).then(r => r.json());
    }

    async getPast15EventsByLeagueId(id) {
        return this.#fetch(`https://www.thesportsdb.com/api/v1/json/${this.#apiKey}/eventspastleague.php?id=${id}`).then(r => r.json());
    }

    async getEventsInRound(id, round, season) {
        return this.#fetch(`https://www.thesportsdb.com/api/v1/json/${this.#apiKey}/eventsround.php?id=${id}&r=${round}&s=${season}`).then(r => r.json());
    }

    async getEventsOnDay(day, sport, name) {
        sport = makeUrl(sport);
        name = makeUrl(name);
        var params = [];
        if (day) params.push(`d=${day}`);
        if (name) params.push(`l=${name}`);
        if (sport) params.push(`s=${sport}`);
        return this.#fetch(`https://www.thesportsdb.com/api/v1/json/${this.#apiKey}/eventsday.php?${params.join('&')}`).then(r => r.json());
    }

    async getTvEventsOnDay(day, sport, country) {
        sport = makeUrl(sport);
        country = makeUrl(country);
        var params = [];
        if (day) params.push(`d=${day}`);
        if (country) params.push(`a=${country}`);
        if (sport) params.push(`s=${sport}`);
        return this.#fetch(`https://www.thesportsdb.com/api/v1/json/${this.#apiKey}/eventstv.php?${params.join('&')}`).then(r => r.json());
    }

    async getTvEventsByChannel(channel) {
        channel = makeUrl(channel);
        return this.#fetch(`https://www.thesportsdb.com/api/v1/json/${this.#apiKey}/eventstv.php?c=${channel}`).then(r => r.json());
    }

    async getEventsByLeagueIdAndSeason(id, season) {
        return this.#fetch(`https://www.thesportsdb.com/api/v1/json/${this.#apiKey}/eventsseason.php?id=${id}&s=${season}`).then(r => r.json());
    }

    async getImage(id) {
        return this.#fetch(`https://www.thesportsdb.com/images/media/league/fanart/${id}.jpg`).then(r => r.json());
    }

    async getPreviewImage(id) {
        return this.#fetch(`https://www.thesportsdb.com/images/media/league/fanart/${id}.jpg/preview`).then(r => r.json());
    }

    async getYoutubeEventHighligts(day, league, sport) {
        league = makeUrl(league);
        sport = makeUrl(sport);
        var params = [];
        if (day) params.push(`d=${day}`);
        if (league) params.push(`l=${league}`);
        if (sport) params.push(`s=${sport}`);
        return this.#fetch(`https://www.thesportsdb.com/api/v1/json/${this.#apiKey}/eventshighlights.php?${params.join('&')}`).then(r => r.json());
    }

    async getAllEventsByLeagueIdAndSeason(id, season) {
        return this.#fetch(`https://www.thesportsdb.com/api/v1/json/${this.#apiKey}/eventsseason.php?id=${id}&s=${season}`).then(r => r.json());
    }

    async getSoccerLivescores() {
        return this.#fetch(`https://www.thesportsdb.com/api/v1/json/${this.#apiKey}/latestsoccer.php`).then(r => r.json());
    }

    async getLivescoresBySport(sport) {
        sport = makeUrl(sport);
        return this.#fetch(`https://www.thesportsdb.com/api/v2/json/${this.#apiKey}/livescore.php?s=${sport}`).then(r => r.json());
    }

    async getGolfLivescores() {
        return this.#fetch(`https://www.thesportsdb.com/api/v1/json/${this.#apiKey}/latestgolf.php`).then(r => r.json());
    }

    async getBasketballLivescores() {
        return this.#fetch(`https://www.thesportsdb.com/api/v1/json/${this.#apiKey}/latestbasketball.php`).then(r => r.json());
    }

    async getAmericanFootballLivescores() {
        return this.#fetch(`https://www.thesportsdb.com/api/v1/json/${this.#apiKey}/latestamericanfootball.php`).then(r => r.json());
    }
}

function makeUrl(x) {
    if (!x) return x;
    return x.split(' ').join('_');
}

export default SportsDbApi;
