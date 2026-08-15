function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index')
    .setTitle('Map Orientation Studio')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}
