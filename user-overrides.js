user_pref("_user.js.parrot", "OVERRIDES: user-overrides.js");

user_pref("browser.startup.page", 3); //0102
user_pref("browser.startup.homepage", "about:home"); //0103
user_pref("browser.newtabpage.enabled", true); //0104

//TODO 0204 location spec. search

user_pref("extensions.screenshots.upload-disabled", true); //0515

user_pref("browser.search.suggest.enabled", true); //0807
user_pref("browser.urlbar.suggest.searches", true);

//TODO 1241 unsave content

user_pref("browser.display.use_document_fonts", 1); //1401

//TODO 1825 widevine

user_pref("webgl.disabled", false); //2010
user_pref("webgl.enable-webgl2", true);

user_pref("dom.serviceWorkers.enabled", true); //2302

//2422 WASM/asmjs

user_pref("devtools.chrome.enabled", true); //2607

user_pref("network.IDN_show_punycode", false); //2619

user_pref("browser.download.manager.addToRecentDocs", true); //2652

//2803
user_pref("privacy.clearOnShutdown.cache", true);
user_pref("privacy.clearOnShutdown.cookies", false);
user_pref("privacy.clearOnShutdown.downloads", false); // see note above
user_pref("privacy.clearOnShutdown.formdata", true); // Form & Search History
user_pref("privacy.clearOnShutdown.history", false); // Browsing & Download History
user_pref("privacy.clearOnShutdown.offlineApps", false); // Offline Website Data
user_pref("privacy.clearOnShutdown.sessions", false); // Active Logins
user_pref("privacy.clearOnShutdown.siteSettings", false); // Site Preferences

//2804
user_pref("privacy.cpd.cache", true);
user_pref("privacy.cpd.cookies", true);
   // user_pref("privacy.cpd.downloads", true); // not used, see note above
user_pref("privacy.cpd.formdata", true); // Form & Search History
user_pref("privacy.cpd.history", false); // Browsing & Download History
user_pref("privacy.cpd.offlineApps", true); // Offline Website Data
user_pref("privacy.cpd.passwords", false); // this is not listed
user_pref("privacy.cpd.sessions", true); // Active Logins
user_pref("privacy.cpd.siteSettings", false); // Site Preferences


user_pref("privacy.sanitize.timeSpan", 1); //2806

//Temporary Containers
//ublock origin
//smarthttps
//decentraleyes
