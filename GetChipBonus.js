// ====================================================================================================
//
// Cloud Code for AwardChipBonus, write your code here to customise the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://portal.gamesparks.net/docs.htm			
//
// ====================================================================================================
require("TimeMod");

const bonusKey = "chipBonus";
const configCollectionName = "Config";

var playerId = Spark.getPlayer().getPlayerId();

if (TimeMod.useTimedQuant("ChipsBonus", playerId)) {
    //get bonus
    var chipBonus = Spark.metaCollection(configCollectionName).findOne({ "key": bonusKey });
    Spark.getPlayer().credit1(chipBonus.chips);
    Spark.setScriptData("chipBonus", chipBonus.chips);
}
else {
    Spark.setScriptError("greasyError");
}