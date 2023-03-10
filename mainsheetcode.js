function syncSheets() {
   // Get the source and destination spreadsheets
  var sourceSpreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var destSpreadsheet = SpreadsheetApp.openById("Worksheet or Secondary Sheet ID Here");
  
  // Get the source and destination sheets
  var sourceSheet = sourceSpreadsheet.getSheetByName("Sheet1");
  var destSheet = destSpreadsheet.getSheetByName("Sheet1");
  
  // Get the data from the source sheet
  var sourceData = sourceSheet.getDataRange().getValues();
  
  // Get the data from the destination sheet
  var destData = destSheet.getDataRange().getValues();
  
  // Compare the source data and the destination data
  for (var i = 0; i < sourceData.length; i++) {
    for (var j = 0; j < sourceData[0].length; j++) {
      if (sourceData[i][j] != destData[i][j]) {
        destSheet.getRange(i + 1, j + 1).setValue(sourceData[i][j]);
      }
    }
  }
}
