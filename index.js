var apiKey = 123;

export default {
    setApiKey(key){
        apiKey = key
    },
    async getTeamByName(name){
        name = makeUrl(name)
        return await fetch(`https://www.thesportsdb.com/api/v1/json/${apiKey}/searchteams.php?t=${name}`).then(r => r.json());
    },
    async getTeamByShortCode(code){
        code = makeUrl(code)
        return await fetch(`https://www.thesportsdb.com/api/v1/json/${apiKey}/searchteams.php?sname=${code}`).then(r => r.json());
    },
    async getAllPlayersByTeam(name){
        name = makeUrl(name)
        return await fetch(`https://www.thesportsdb.com/api/v1/json/${apiKey}/searchplayers.php?t=${name}`).then(r => r.json());
    },
    async getPlayerByName(name, team){
        name = makeUrl(name)
        team = makeUrl(team)
        var params = []
        params.push(`p=${name}`)
        if(team) params.push(`t=${team}`)
        return await fetch(`https://www.thesportsdb.com/api/v1/json/${apiKey}/searchplayers.php?${params.join('&')}`).then(r => r.json());
    },
    async getEventByName(name, season){
        name = makeUrl(name)
        season = makeUrl(season)
        var params = []
        params.push(`e=${name}`)
        if(season) params.push(`s=${season}`)
        return await fetch(`https://www.thesportsdb.com/api/v1/json/${apiKey}/searchevents.php?${params.join('&')}`).then(r => r.json());
    },
    async getSportsList(){
        return await fetch(`https://www.thesportsdb.com/api/v1/json/${apiKey}/all_sports.php`).then(r => r.json());
    },
    async getLeagueList(){
        return await fetch(`https://www.thesportsdb.com/api/v1/json/${apiKey}/all_leagues.php`).then(r => r.json());
    },
    async getCountryList(){
        return await fetch(`https://www.thesportsdb.com/api/v1/json/${apiKey}/all_countries.php`).then(r => r.json());
    },
    async getLeagueListByCountry(country, sport){
        country = makeUrl(country)
        sport = makeUrl(sport)
        var params = []
        params.push(`c=${country}`)
        if(sport) params.push(`s=${sport}`)
        return await fetch(`https://www.thesportsdb.com/api/v1/json/${apiKey}/search_all_leagues.php?${params.join('&')}`).then(r => r.json());
    },
    async getSeasonsInLeagueById(id){
        return await fetch(`https://www.thesportsdb.com/api/v1/json/${apiKey}/search_all_seasons.php?id=${id}`).then(r => r.json());
    },
    async getTeamsByLeagueName(name){
        name = makeUrl(name)
        return await fetch(`https://www.thesportsdb.com/api/v1/json/${apiKey}/search_all_teams.php?l=${name}`).then(r => r.json());
    },
    async getTeamsByLeagueName(name){
        name = makeUrl(name)
        return await fetch(`https://www.thesportsdb.com/api/v1/json/${apiKey}/search_all_teams.php?l=${name}`).then(r => r.json());
    },
    async getTeamsByCountryAndSport(sport, country){
        country = makeUrl(country)
        sport = makeUrl(sport)
        return await fetch(`https://www.thesportsdb.com/api/v1/json/${apiKey}/search_all_teams.php?s=${sport}&c=${country}`).then(r => r.json());
    },
    // async getTeamDetailsById(id){
    //     return axios.get(`https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=${id}`).data;
    // },
    async getPlayersByTeamId(id){
        return await fetch(`https://www.thesportsdb.com/api/v1/json/${apiKey}/lookup_all_players.php?id=${id}`).then(r => r.json());
    },
    async getUsersLoved(user){
        user = makeUrl(user)
        return await fetch(`https://www.thesportsdb.com/api/v1/json/${apiKey}/searchloves.php?u=${user}`).then(r => r.json());
    },
    async getLeagueDetailsById(id){
        return await fetch(`https://www.thesportsdb.com/api/v1/json/${apiKey}/lookupleague.php?id=${id}`).then(r => r.json());
    },
    async getTeamDetailsById(id){
        return await fetch(`https://www.thesportsdb.com/api/v1/json/${apiKey}/lookupteam.php?id=${id}`).then(r => r.json());
    },
    async getPlayerDetailsById(id){
        return await fetch(`https://www.thesportsdb.com/api/v1/json/${apiKey}/lookupplayer.php?id=${id}`).then(r => r.json());
    },
    async getEventDetailsById(id){
        return await fetch(`https://www.thesportsdb.com/api/v1/json/${apiKey}/lookupevent.php?id=${id}`).then(r => r.json());
    },
    async getPlayerHonoursById(id){
        return await fetch(`https://www.thesportsdb.com/api/v1/json/${apiKey}/lookuphonors.php?id=${id}`).then(r => r.json());
    },
    async getPlayerFormerTeamsById(id){
        return await fetch(`https://www.thesportsdb.com/api/v1/json/${apiKey}/lookupformerteams.php?id=${id}`).then(r => r.json());
    },
    async getPlayerContractsById(id){
        return await fetch(`https://www.thesportsdb.com/api/v1/json/${apiKey}/lookupcontracts.php?id=${id}`).then(r => r.json());
    },
    async getEventResultsById(id){
        return await fetch(`https://www.thesportsdb.com/api/v1/json/${apiKey}/eventresults.php?id=${id}`).then(r => r.json());
    },
    async getTvEventById(id){
        return await fetch(`https://www.thesportsdb.com/api/v1/json/${apiKey}/lookuptv.php?id=${id}`).then(r => r.json());
    },
    async getLookupTableByLeagueIdAndSeason(id, season){
        return await fetch(`https://www.thesportsdb.com/api/v1/json/${apiKey}/lookuptable.php?l=${id}&s=${season}`).then(r => r.json());
    },
    async getNext5EventsByTeamId(id){
        return await fetch(`https://www.thesportsdb.com/api/v1/json/${apiKey}/eventsnext.php?id=${id}`).then(r => r.json());
    },
    async getNext15EventsByLeagueId(id){
        return await fetch(`https://www.thesportsdb.com/api/v1/json/${apiKey}/eventsnext.php?id=${id}`).then(r => r.json());
    },
    async getPast5EventsByTeamId(id){
        return await fetch(`https://www.thesportsdb.com/api/v1/json/${apiKey}/eventslast.php?id=${id}`).then(r => r.json());
    },
    async getPast15EventsByLeagueId(id){
        return await fetch(`https://www.thesportsdb.com/api/v1/json/${apiKey}/eventspastleague.php?id=${id}`).then(r => r.json());
    },
    async getEventsInRound(id, round, season){
        return await fetch(`https://www.thesportsdb.com/api/v1/json/${apiKey}/eventsround.php?id=${id}&r=${round}&s=${season}`).then(r => r.json());
    },
    async getEventsOnDay(day, sport, name){
        sport = makeUrl(sport)
        name = makeUrl(name)
        var params = []
        if(day) params.push(`d=${day}`)
        if(name) params.push(`l=${name}`)
        if(sport) params.push(`s=${sport}`)
        return await fetch(`https://www.thesportsdb.com/api/v1/json/${apiKey}/eventsday.php?${params.join('&')}`).then(r => r.json());
    },
    async getTvEventsOnDay(day, sport, country){
        sport = makeUrl(sport)
        country = makeUrl(country)
        var params = []
        if(day) params.push(`d=${day}`)
        if(country) params.push(`a=${league}`)
        if(sport) params.push(`s=${sport}`)
        return await fetch(`https://www.thesportsdb.com/api/v1/json/${apiKey}/eventstv.php?${params.join('&')}`).then(r => r.json());
    },
    async getTvEventsByChannel(channel){
        channel = makeUrl(channel)
        return await fetch(`https://www.thesportsdb.com/api/v1/json/${apiKey}/eventstv.php?c=${channel}`).then(r => r.json());
    },
    async getEventsByLeagueIdAndSeason(id, season){
        return await fetch(`https://www.thesportsdb.com/api/v1/json/${apiKey}/eventsseason.php?id=${id}&s=${season}`).then(r => r.json());
    },
    async getImage(id){
        return await fetch(`https://www.thesportsdb.com/images/media/league/fanart/${id}.jpg`).then(r => r.json());
    },
    async getPreviewImage(id){
        return await fetch(`https://www.thesportsdb.com/images/media/league/fanart/${id}.jpg/preview`).then(r => r.json());
    },
    async getYoutubeEventHighligts(day, league, sport){
        league = makeUrl(league)
        sport = makeUrl(sport)
        var x = []
        if(day) x.push(`d=${day}`)
        if(league) x.push(`l=${league}`)
        if(sport) x.push(`s=${sport}`)
        return await fetch(`https://www.thesportsdb.com/api/v1/json/${apiKey}/eventshighlights.php?${x.join("&")}`).then(r => r.json());
    },
    async getAllEventsByLeagueIdAndSeason(id, season){
        return await fetch(`https://www.thesportsdb.com/api/v1/json/${apiKey}/eventsseason.php?id=${id}&s=${season}`).then(r => r.json());
    },
    async getSoccerLivescores(){
        return await fetch(`https://www.thesportsdb.com/api/v1/json/${apiKey}/latestsoccer.php`).then(r => r.json());
    },
    async getLivescoresBySport(sport){
        sport = makeUrl(sport)
        return await fetch(`https://www.thesportsdb.com/api/v2/json/${apiKey}/livescore.php?s=${sport}`).then(r => r.json());
    },
    async getGolfLivescores(){
        return await fetch(`https://www.thesportsdb.com/api/v1/json/${apiKey}/latestgolf.php`).then(r => r.json());
    },
    async getBasketballLivescores(){
        return await fetch(`https://www.thesportsdb.com/api/v1/json/${apiKey}/latestbasketball.php`).then(r => r.json());
    },
    async getAmericanFootballLivescores(){
        return await fetch(`https://www.thesportsdb.com/api/v1/json/${apiKey}/latestamericanfootball.php`).then(r => r.json());
    }
}

function makeUrl(x){
    if(!x) return x;
    return x.split(" ").join("_");
}