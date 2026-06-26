export interface Sport {
    idSport: number;
    strSport: string;
    strFormat: string;
    strSportThumb: string | null;
    strSportThumbBW: string;
    strSportIconGreen: string;
    strSportDescription: string;
}

export interface Country {
    name_en: string;
    flag_url_32: string;
}

export interface Season {
    strSeason: string;
}

export interface League {
    idLeague: number;
    idSoccerXML: number | null;
    idAPIfootball: number | null;
    idAPIfootballv3: number | null;
    strSport: string | null;
    strLeague: string;
    strLeagueAlternate: string | null;
    intDivision: number | null;
    idCup: number | null;
    strCurrentSeason: string | null;
    intFormedYear: number | null;
    dateFirstEvent: string | null;
    strGender: string | null;
    strCountry: string | null;
    strWebsite: string | null;
    strFacebook: string | null;
    strInstagram: string | null;
    strTwitter: string | null;
    strYoutube: string | null;
    strRSS: string | null;
    strDescriptionEN: string | null;
    strDescriptionDE: string | null;
    strDescriptionFR: string | null;
    strDescriptionIT: string | null;
    strDescriptionCN: string | null;
    strDescriptionJP: string | null;
    strDescriptionRU: string | null;
    strDescriptionES: string | null;
    strDescriptionPT: string | null;
    strDescriptionSE: string | null;
    strDescriptionNL: string | null;
    strDescriptionHU: string | null;
    strDescriptionNO: string | null;
    strDescriptionPL: string | null;
    strDescriptionIL: string | null;
    strFanart1: string | null;
    strFanart2: string | null;
    strFanart3: string | null;
    strFanart4: string | null;
    strBanner: string | null;
    strBadge: string | null;
    strLogo: string | null;
    strPoster: string | null;
    strTrophy: string | null;
    strTvRights: string | null;
    strNaming: string | null;
    strComplete: string | null;
    strLocked: string | null;
}

export interface Team {
    idTeam: number;
    idESPN: number | null;
    idSoccerXML: number | null;
    idAPIfootball: number | null;
    intLoved: number | null;
    strTeam: string;
    strTeamAlternate: string | null;
    strTeamShort: string | null;
    intFormedYear: number | null;
    strSport: string;
    strLeague: string;
    idLeague: number;
    strLeague2: string | null;
    idLeague2: number | null;
    strLeague3: string | null;
    idLeague3: number | null;
    strLeague4: string | null;
    idLeague4: number | null;
    strLeague5: string | null;
    idLeague5: number | null;
    strLeague6: string | null;
    idLeague6: number | null;
    strLeague7: string | null;
    idLeague7: number | null;
    strDivision: string | null;
    idVenue: number | null;
    strManager: string | null;
    strStadium: string | null;
    strKeywords: string | null;
    strRSS: string | null;
    strLocation: string | null;
    intStadiumCapacity: number | null;
    strWebsite: string | null;
    strFacebook: string | null;
    strTwitter: string | null;
    strInstagram: string | null;
    strDescriptionEN: string | null;
    strDescriptionDE: string | null;
    strDescriptionFR: string | null;
    strDescriptionCN: string | null;
    strDescriptionIT: string | null;
    strDescriptionJP: string | null;
    strDescriptionRU: string | null;
    strDescriptionES: string | null;
    strDescriptionPT: string | null;
    strDescriptionSE: string | null;
    strDescriptionNL: string | null;
    strDescriptionHU: string | null;
    strDescriptionNO: string | null;
    strDescriptionIL: string | null;
    strDescriptionPL: string | null;
    strColour1: string | null;
    strColour2: string | null;
    strColour3: string | null;
    strGender: string;
    strCountry: string;
    strBadge: string | null;
    strLogo: string | null;
    strFanart1: string | null;
    strFanart2: string | null;
    strFanart3: string | null;
    strFanart4: string | null;
    strBanner: string | null;
    strEquipment: string | null;
    strYoutube: string | null;
    strLocked: string;
}

export interface Player {
    idPlayer: number;
    idTeam: number;
    idTeam2: number | null;
    idTeamNational: number | null;
    idSoccerXML: number | null;
    idAPIfootball: number | null;
    idPlayerManager: number | null;
    idWikidata: number | null;
    idTransferMkt: number | null;
    idESPN: number | null;
    strNationality: string;
    strPlayer: string;
    strPlayerAlternate: string | null;
    strTeam: string;
    strTeam2: string | null;
    strSport: string;
    intSoccerXMLTeamID: number | null;
    dateBorn: string;
    dateDied: string | null;
    strNumber: string | null;
    dateSigned: string | null;
    strSigning: string | null;
    strWage: string | null;
    strOutfitter: string | null;
    strKit: string | null;
    strAgent: string | null;
    strBirthLocation: string | null;
    strDeathLocation: string | null;
    strEthnicity: string | null;
    strStatus: string | null;
    strDescriptionEN: string | null;
    strDescriptionDE: string | null;
    strDescriptionFR: string | null;
    strDescriptionCN: string | null;
    strDescriptionIT: string | null;
    strDescriptionJP: string | null;
    strDescriptionRU: string | null;
    strDescriptionES: string | null;
    strDescriptionPT: string | null;
    strDescriptionSE: string | null;
    strDescriptionNL: string | null;
    strDescriptionHU: string | null;
    strDescriptionNO: string | null;
    strDescriptionIL: string | null;
    strDescriptionPL: string | null;
    strGender: string;
    strSide: string | null;
    strPosition: string;
    strCollege: string | null;
    strWebsite: string | null;
    strFacebook: string | null;
    strTwitter: string | null;
    strInstagram: string | null;
    strYoutube: string | null;
    strHeight: string | null;
    strWeight: string | null;
    intLoved: number | null;
    strThumb: string | null;
    strPoster: string | null;
    strCutout: string | null;
    strCartoon: string | null;
    strRender: string | null;
    strBanner: string | null;
    strFanart1: string | null;
    strFanart2: string | null;
    strFanart3: string | null;
    strFanart4: string | null;
    strCreativeCommons: string | null;
    strLocked: string | null;
    strLastName: string | null;
    relevance: number | null;
}

export interface Honour {
    id: number;
    idPlayer: number;
    idTeam: number;
    idLeague: number | null;
    idHonour: number;
    strSport: string;
    strPlayer: string;
    strTeam: string;
    strTeamBadge: string;
    strHonour: string;
    strHonourLogo: string;
    strHonourTrophy: string;
    strSeason: string;
}

export interface FormerTeam {
    id: number;
    idPlayer: number;
    idFormerTeam: number;
    strSport: string;
    strPlayer: string;
    strFormerTeam: string;
    strMoveType: string;
    strBadge: string;
    strJoined: string;
    strDeparted: string;
}

export interface Contract {
    id: number;
    idPlayer: number;
    idTeam: number;
    strSport: string;
    strPlayer: string;
    strTeam: string;
    strBadge: string;
    strYearStart: string;
    strYearEnd: string;
    strWage: string;
}

export interface Event {
    idEvent: number;
    idSoccerXML: number | null;
    idAPIfootball: number | null;
    strEvent: string;
    strEventAlternate: string | null;
    strFilename: string;
    strSport: string;
    idLeague: number;
    strLeague: string;
    strLeagueBadge: string | null;
    strSeason: string;
    strDescriptionEN: string | null;
    strHomeTeam: string | null;
    strAwayTeam: string | null;
    intScore: number | null;
    intScoreVotes: number | null;
    intHomeScore: number | null;
    intRound: number | null;
    intAwayScore: number | null;
    intSpectators: number | null;
    strOfficial: string | null;
    strHomeGoalDetails: string | null;
    strHomeRedCards: string | null;
    strHomeYellowCards: string | null;
    strHomeLineupGoalkeeper: string | null;
    strHomeLineupDefense: string | null;
    strHomeLineupMidfield: string | null;
    strHomeLineupForward: string | null;
    strHomeLineupSubstitutes: string | null;
    strHomeFormation: string | null;
    strAwayRedCards: string | null;
    strAwayYellowCards: string | null;
    strAwayGoalDetails: string | null;
    strAwayLineupGoalkeeper: string | null;
    strAwayLineupDefense: string | null;
    strAwayLineupMidfield: string | null;
    strAwayLineupForward: string | null;
    strAwayLineupSubstitutes: string | null;
    strAwayFormation: string | null;
    intHomeShots: number | null;
    intAwayShots: number | null;
    strSquare: string | null;
    strTimestamp: string | null;
    dateEvent: string;
    dateEventLocal: string | null;
    dateEventEnd: string | null;
    strDate: string | null;
    strTime: string | null;
    strTimeLocal: string | null;
    strGroup: string | null;
    idHomeTeam: number | null;
    strHomeTeamBadge: string | null;
    idAwayTeam: number | null;
    strAwayTeamBadge: string | null;
    strResult: string | null;
    idVenue: number | null;
    strVenue: string | null;
    strCountry: string | null;
    strCity: string | null;
    strPoster: string | null;
    strFanart: string | null;
    strThumb: string | null;
    strBanner: string | null;
    strMap: string | null;
    strTweet1: string | null;
    strTweet2: string | null;
    strTweet3: string | null;
    strVideo: string | null;
    strStatus: string | null;
    strPostponed: string | null;
    strLocked: string | null;
}

export interface EventResult {
    idResult: number;
    idPlayer: number | null;
    strPlayer: string | null;
    idTeam: number;
    idEvent: number;
    strEvent: string;
    strResult: string | null;
    intPosition: number;
    intPoints: number;
    strDetail: string;
    dateEvent: string;
    strSeason: string;
    strCountry: string;
    strSport: string;
}

export interface Lineup {
    idLineup: number;
    idEvent: number;
    strCountry: string | null;
    strSeason: string | null;
    strPosition: string;
    strPositionShort: string | null;
    strHome: string;
    strSubstitute: string;
    intSquadNumber: number;
    idPlayer: number;
    strPlayer: string;
    idTeam: number;
    strTeam: string;
    strFormation: string | null;
    strCutout: string | null;
    strThumb: string | null;
    strRender: string | null;
}

export interface Television {
    id: number;
    idEvent: number;
    strSport: string;
    strEvent: string;
    strEventThumb: string | null;
    strEventPoster: string | null;
    strEventBanner: string | null;
    strEventSquare: string | null;
    idChannel: number;
    strCountry: string;
    strEventCountry: string | null;
    strLogo: string;
    strChannel: string;
    strSeason: string;
    intDivision: number | null;
    strTime: string;
    dateEvent: string;
    strTimeStamp: string | null;
}

export interface Highlight {
    idEvent: number;
    strEvent: string;
    strSport: string;
    idLeague: number;
    strLeague: string;
    dateEvent: string;
    strVideo: string;
    strPoster: string | null;
    strThumb: string | null;
    strFanart: string | null;
    strSeason: string;
}

export interface Livescore {
    idLiveScore: number;
    idEvent: number;
    strSport: string;
    idLeague: number;
    strLeague: string;
    idHomeTeam: number;
    idAwayTeam: number;
    strHomeTeam: string;
    strAwayTeam: string;
    strHomeTeamBadge: string;
    strAwayTeamBadge: string;
    intHomeScore: number;
    intAwayScore: number;
    strPlayer: string | null;
    idPlayer: number | null;
    intEventScore: number | null;
    intEventScoreTotal: number | null;
    strStatus: string;
    strProgress: string;
    strEventTime: string;
    dateEvent: string;
    updated: string;
}

export interface Standing {
    idStanding: number;
    intRank: number;
    idTeam: number;
    strTeam: string;
    strBadge: string | null;
    idLeague: number;
    strLeague: string;
    strSeason: string;
    strForm: string | null;
    strDescription: string | null;
    intPlayed: number;
    intWin: number;
    intLoss: number;
    intDraw: number;
    intGoalsFor: number;
    intGoalsAgainst: number;
    intGoalDifference: number;
    intPoints: number;
    dateUpdated: string | null;
}

export interface Love {
    idEdit: number;
    strUsername: string;
    strEditType: string;
    strReason: string | null;
    date: string;
    idTeam: number | null;
    idPlayer: number | null;
    idLeague: number | null;
    idEvent: number | null;
    idVenue: number | null;
    idChannel: number | null;
    idHonour: number | null;
    idMilestone: number | null;
    idCollection: number | null;
    strTeam: string | null;
    strPlayer: string | null;
    strLeague: string | null;
    strEvent: string | null;
    strVenue: string | null;
    strSport: string | null;
    strCollection: string | null;
    strEventThumb: string | null;
    strEventPoster: string | null;
    strEventSquare: string | null;
    strEventBanner: string | null;
    strEventFanart: string | null;
    strEventMap: string | null;
    strPlayerThumb: string | null;
    strPlayerCutout: string | null;
    strPlayerCartoon: string | null;
    strPlayerRender: string | null;
    strPlayerFanart: string | null;
    strPlayerBanner: string | null;
    strPlayerPoster: string | null;
    strTeamBadge: string | null;
    strTeamLogo: string | null;
    strTeamKit: string | null;
    strTeamFanart: string | null;
    strTeamBanner: string | null;
    strTeamEquipment: string | null;
    strVenueThumb: string | null;
    strVenueLogo: string | null;
    strVenueFanart: string | null;
    strLeagueBadge: string | null;
    strLeagueLogo: string | null;
    strLeagueFanart: string | null;
    strLeagueBanner: string | null;
    strLeaguePoster: string | null;
    strLeagueTrophy: string | null;
    strChannelLogo: string | null;
    strChannelBanner: string | null;
    strChannelFanart: string | null;
}

export interface Venue {
    idVenue: number;
    strVenue: string;
    strVenueAlternate: string | null;
    strVenueShort: string | null;
    strVenueSponsor: string | null;
    strSport: string | null;
    strCost: string | null;
    strCountry: string | null;
    strLocation: string | null;
    strTimezone: string | null;
    intCapacity: number | null;
    intFormedYear: number | null;
    strWebsite: string | null;
    strFacebook: string | null;
    strTwitter: string | null;
    strInstagram: string | null;
    strYoutube: string | null;
    strDescriptionEN: string | null;
    strThumb: string | null;
    strLogo: string | null;
    strFanart1: string | null;
    strFanart2: string | null;
    strFanart3: string | null;
    strFanart4: string | null;
    strBanner: string | null;
    strMap: string | null;
    strLocked: string | null;
}

export interface Equipment {
    idTeam: number;
    strTeam: string;
    strSeason: string;
    strKit: string;
    strKitColour1: string | null;
    strKitColour2: string | null;
    strKitColour3: string | null;
    strKitType: string | null;
    strOutfitter: string | null;
    strEquipmentThumb: string | null;
}

export interface Milestone {
    idMilestone: number;
    idPlayer: number;
    idTeam: number | null;
    idLeague: number | null;
    strPlayer: string;
    strMilestone: string;
    strSeason: string | null;
    strData: string | null;
    dateMilestone: string | null;
}

export interface PlayerStats {
    idPlayerStats: number;
    idEvent: number;
    idPlayer: number;
    idTeam: number;
    strPlayer: string;
    strTeam: string;
    strEvent: string;
    strSeason: string;
    intPosition: number | null;
    strPosition: string | null;
    intMinutesPlayed: number | null;
    intGoals: number | null;
    intAssists: number | null;
    intYellowCards: number | null;
    intRedCards: number | null;
    intRating: number | null;
}

export interface Timeline {
    idTimeline: number;
    idEvent: number;
    strTimeline: string;
    strTimelineDetail: string | null;
    strHome: string;
    strPlayer: string | null;
    strPlayer2: string | null;
    idPlayer: number | null;
    idPlayer2: number | null;
    strTeam: string | null;
    idTeam: number | null;
    intTime: number | null;
    sortOrder: number | null;
}

export interface EventStats {
    idStatistic: number;
    idEvent: number;
    strEvent: string;
    strStat: string;
    intHome: number | null;
    intAway: number | null;
}

export interface SportsDBOptions {
    apiKey?: string | number;
    fetch?: typeof globalThis.fetch;
}

export declare class SportsDbApi {
    constructor(options?: SportsDBOptions);

    // Venues
    searchVenues(name: string): Promise<{ venues: Venue[] | null }>;
    getVenueById(id: string | number): Promise<{ venues: Venue[] | null }>;

    // Teams
    getTeamByName(name: string): Promise<{ teams: Team[] | null }>;
    getTeamByShortCode(code: string): Promise<{ teams: Team[] | null }>;
    getTeamDetailsById(id: string | number): Promise<{ teams: Team[] | null }>;
    getTeamsByLeagueName(name: string): Promise<{ teams: Team[] | null }>;
    getTeamsByCountryAndSport(sport: string, country: string): Promise<{ teams: Team[] | null }>;
    getTeamEquipmentById(id: string | number): Promise<{ equipment: Equipment[] | null }>;

    // Players
    getAllPlayersByTeam(name: string): Promise<{ player: Player[] | null }>;
    getPlayerByName(name: string, team?: string): Promise<{ player: Player[] | null }>;
    getPlayerDetailsById(id: string | number): Promise<{ players: Player[] | null }>;
    getPlayersByTeamId(id: string | number): Promise<{ player: Player[] | null }>;
    getPlayerHonoursById(id: string | number): Promise<{ honours: Honour[] | null }>;
    getPlayerFormerTeamsById(id: string | number): Promise<{ formerteams: FormerTeam[] | null }>;
    getPlayerContractsById(id: string | number): Promise<{ contracts: Contract[] | null }>;
    getPlayerMilestonesById(id: string | number): Promise<{ milestones: Milestone[] | null }>;
    getPlayerStatsByEventId(id: string | number): Promise<{ playerstats: PlayerStats[] | null }>;
    getPlayerResultsById(id: string | number): Promise<{ results: EventResult[] | null }>;

    // Events
    getEventByName(name: string, season?: string): Promise<{ event: Event[] | null }>;
    getEventDetailsById(id: string | number): Promise<{ events: Event[] | null }>;
    getEventResultsById(id: string | number): Promise<{ results: EventResult[] | null }>;
    getEventLineupById(id: string | number): Promise<{ lineup: Lineup[] | null }>;
    getEventTimelineById(id: string | number): Promise<{ timeline: Timeline[] | null }>;
    getEventStatsById(id: string | number): Promise<{ eventstats: EventStats[] | null }>;
    getEventsInRound(id: string | number, round: string | number, season: string): Promise<{ events: Event[] | null }>;
    getEventsOnDay(day: string, sport?: string, league?: string): Promise<{ events: Event[] | null }>;
    getEventsByLeagueIdAndSeason(id: string | number, season: string): Promise<{ events: Event[] | null }>;
    getAllEventsByLeagueIdAndSeason(id: string | number, season: string): Promise<{ events: Event[] | null }>;
    getNext5EventsByTeamId(id: string | number): Promise<{ events: Event[] | null }>;
    getPast5EventsByTeamId(id: string | number): Promise<{ results: Event[] | null }>;
    getPast15EventsByLeagueId(id: string | number): Promise<{ results: Event[] | null }>;
    getNext15EventsByLeagueId(id: string | number): Promise<{ events: Event[] | null }>;
    getEventByFilename(filename: string, season?: string): Promise<{ event: Event[] | null }>;

    // Leagues & Seasons
    getSportsList(): Promise<{ sports: Sport[] | null }>;
    getLeagueList(): Promise<{ leagues: League[] | null }>;
    getLeagueListByCountry(country: string, sport?: string): Promise<{ leagues: League[] | null }>;
    getLeagueDetailsById(id: string | number): Promise<{ leagues: League[] | null }>;
    getSeasonsInLeagueById(id: string | number): Promise<{ seasons: Season[] | null }>;
    getLookupTableByLeagueIdAndSeason(id: string | number, season: string): Promise<{ standings: Standing[] | null }>;

    // Countries & Users
    getCountryList(): Promise<{ countries: Country[] | null }>;
    getUsersLoved(user: string): Promise<{ players: Love[] | null }>;

    // TV
    getTvEventById(id: string | number): Promise<{ tvevent: Television[] | null }>;
    getTvEventsOnDay(day: string, sport?: string, country?: string): Promise<{ tvevent: Television[] | null }>;
    getTvEventsByChannel(channel: string): Promise<{ tvevent: Television[] | null }>;

    // Media
    getImage(id: string | number): Promise<any>;
    getPreviewImage(id: string | number): Promise<any>;
    getYoutubeEventHighligts(day: string, league?: string, sport?: string): Promise<{ highlights: Highlight[] | null }>;

    // Livescores
    getSoccerLivescores(): Promise<{ matches: Livescore[] | null }>;
    getLivescoresBySport(sport: string): Promise<{ livescore: Livescore[] | null }>;
    getGolfLivescores(): Promise<{ matches: Livescore[] | null }>;
    getBasketballLivescores(): Promise<{ matches: Livescore[] | null }>;
    getAmericanFootballLivescores(): Promise<{ matches: Livescore[] | null }>;
}

export default SportsDbApi;
