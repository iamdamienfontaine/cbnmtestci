/*jslint browser: true, evil: true */

// define correct path for files inclusion
var scripts = document.getElementsByTagName('script'),
    path = scripts[scripts.length - 1].src.split('?')[0],
    bannierecookieForceCDN = (bannierecookieForceCDN === undefined) ? '' : bannierecookieForceCDN,
    cdn = (bannierecookieForceCDN === '') ? path.split('/').slice(0, -1).join('/') + '/' : bannierecookieForceCDN,
    alreadyLaunch = (alreadyLaunch === undefined) ? 0 : alreadyLaunch,
    bannierecookieForceLanguage = (bannierecookieForceLanguage === undefined) ? '' : bannierecookieForceLanguage,
    bannierecookieForceExpire = (bannierecookieForceExpire === undefined) ? '' : bannierecookieForceExpire,
    bannierecookieCustomText = (bannierecookieCustomText === undefined) ? '' : bannierecookieCustomText,
    // bannierecookieExpireInDay: true for day(s) value - false for hour(s) value
    bannierecookieExpireInDay = (bannierecookieExpireInDay === undefined || typeof bannierecookieExpireInDay !== "boolean") ? true : bannierecookieExpireInDay,
    timeExpire = 31536000000,
    bannierecookieProLoadServices,
    bannierecookieNoAdBlocker = false;



var bannierecookie = {
    "version": 20191031,
    "cdn": cdn,
    "user": {},
    "lang": {},
    "services": {},
    "added": [],
    "idprocessed": [],
    "state": [],
    "launch": [],
    "parameters": {},
    "isAjax": false,
    "reloadThePage": false,
    "events": {
        "init": function () {},
        "load": function () {},
    },
    "init": function (params) {
        "use strict";
        var origOpen;

        bannierecookie.parameters = params;
        if (alreadyLaunch === 0) {
            alreadyLaunch = 1;
            if (window.addEventListener) {
                window.addEventListener("load", function () {
                    bannierecookie.load();
                    bannierecookie.fallback(['bannierecookieOpenPanel'], function (elem) {
                        elem.addEventListener("click", function (event) {
                            bannierecookie.userInterface.openPanel();
                            event.preventDefault();
                        }, false);
                    }, true);
                }, false);
                window.addEventListener("scroll", function () {
                    var scrollPos = window.pageYOffset || document.documentElement.scrollTop,
                        heightPosition;
                    if (document.getElementById('bannierecookieAlertBig') !== null && !bannierecookie.highPrivacy) {
                        if (document.getElementById('bannierecookieAlertBig').style.display === 'block') {
                            heightPosition = document.getElementById('bannierecookieAlertBig').offsetHeight + 'px';

                            if (scrollPos > (screen.height * 2)) {
                                bannierecookie.userInterface.respondAll(true);
                            } else if (scrollPos > (screen.height / 2)) {
                                document.getElementById('bannierecookieDisclaimerAlert').innerHTML = '<strong>' + bannierecookie.lang.alertBigScroll + '</strong> ' + bannierecookie.lang.alertBig;
                            }

                            if (bannierecookie.orientation === 'top') {
                                document.getElementById('bannierecookiePercentage').style.top = heightPosition;
                            } else {
                                document.getElementById('bannierecookiePercentage').style.bottom = heightPosition;
                            }
                            document.getElementById('bannierecookiePercentage').style.width = ((100 / (screen.height * 2)) * scrollPos) + '%';
                        }
                    }
                }, false);

                window.addEventListener("keydown", function (evt) {
                    if (evt.keyCode === 27) {
                        bannierecookie.userInterface.closePanel();
                    }
                }, false);
                window.addEventListener("hashchange", function () {
                    if (document.location.hash === bannierecookie.hashtag && bannierecookie.hashtag !== '') {
                        bannierecookie.userInterface.openPanel();
                    }
                }, false);
                window.addEventListener("resize", function () {
                    if (document.getElementById('bannierecookie') !== null) {
                        if (document.getElementById('bannierecookie').style.display === 'block') {
                            bannierecookie.userInterface.jsSizing('main');
                        }
                    }

                    if (document.getElementById('bannierecookieCookiesListContainer') !== null) {
                        if (document.getElementById('bannierecookieCookiesListContainer').style.display === 'block') {
                            bannierecookie.userInterface.jsSizing('cookie');
                        }
                    }
                }, false);
            } else {
                window.attachEvent("onload", function () {
                    bannierecookie.load();
                    bannierecookie.fallback(['bannierecookieOpenPanel'], function (elem) {
                        elem.attachEvent("onclick", function (event) {
                            bannierecookie.userInterface.openPanel();
                            event.preventDefault();
                        });
                    }, true);
                });
                window.attachEvent("onscroll", function () {
                    var scrollPos = window.pageYOffset || document.documentElement.scrollTop,
                        heightPosition;
                    if (document.getElementById('bannierecookieAlertBig') !== null && !bannierecookie.highPrivacy) {
                        if (document.getElementById('bannierecookieAlertBig').style.display === 'block') {
                            heightPosition = document.getElementById('bannierecookieAlertBig').offsetHeight + 'px';

                            if (scrollPos > (screen.height * 2)) {
                                bannierecookie.userInterface.respondAll(true);
                            } else if (scrollPos > (screen.height / 2)) {
                                document.getElementById('bannierecookieDisclaimerAlert').innerHTML = '<strong>' + bannierecookie.lang.alertBigScroll + '</strong> ' + bannierecookie.lang.alertBig;
                            }
                            if (bannierecookie.orientation === 'top') {
                                document.getElementById('bannierecookiePercentage').style.top = heightPosition;
                            } else {
                                document.getElementById('bannierecookiePercentage').style.bottom = heightPosition;
                            }
                            document.getElementById('bannierecookiePercentage').style.width = ((100 / (screen.height * 2)) * scrollPos) + '%';
                        }
                    }
                });
                window.attachEvent("onkeydown", function (evt) {
                    if (evt.keyCode === 27) {
                        bannierecookie.userInterface.closePanel();
                    }

                    if ( evt.keyCode === 9 && focusableEls.indexOf(evt.target) >= 0) {
                        if ( evt.shiftKey ) /* shift + tab */ {
                            if (document.activeElement === firstFocusableEl) {
                                lastFocusableEl.focus();
                                evt.preventDefault();
                            }
                        } else /* tab */ {
                            if (document.activeElement === lastFocusableEl) {
                                firstFocusableEl.focus();
                                evt.preventDefault();
                            }
                        }
                    }

                });
                window.attachEvent("onhashchange", function () {
                    if (document.location.hash === bannierecookie.hashtag && bannierecookie.hashtag !== '') {
                        bannierecookie.userInterface.openPanel();
                    }
                });
                window.attachEvent("onresize", function () {
                    if (document.getElementById('bannierecookie') !== null) {
                        if (document.getElementById('bannierecookie').style.display === 'block') {
                            bannierecookie.userInterface.jsSizing('main');
                        }
                    }

                    if (document.getElementById('bannierecookieCookiesListContainer') !== null) {
                        if (document.getElementById('bannierecookieCookiesListContainer').style.display === 'block') {
                            bannierecookie.userInterface.jsSizing('cookie');
                        }
                    }
                });
            }

            if (typeof XMLHttpRequest !== 'undefined') {
                origOpen = XMLHttpRequest.prototype.open;
                XMLHttpRequest.prototype.open = function () {

                    if (window.addEventListener) {
                        this.addEventListener("load", function () {
                            if (typeof bannierecookieProLoadServices === 'function') {
                                bannierecookieProLoadServices();
                            }
                        }, false);
                    } else if (typeof this.attachEvent !== 'undefined') {
                        this.attachEvent("onload", function () {
                            if (typeof bannierecookieProLoadServices === 'function') {
                                bannierecookieProLoadServices();
                            }
                        });
                    } else {
                        if (typeof bannierecookieProLoadServices === 'function') {
                            setTimeout(bannierecookieProLoadServices, 1000);
                        }
                    }

                    try {
                        origOpen.apply(this, arguments);
                    } catch (err) {}
                };
            }
        }

        if(bannierecookie.events.init) {
            bannierecookie.events.init();
        }
    },
    "load": function () {
        "use strict";
        var cdn = bannierecookie.cdn,
            language = bannierecookie.getLanguage(),
            pathToLang = cdn + 'lang/bannierecookie.' + language + '.js?v=' + bannierecookie.version,
            pathToServices = cdn + 'bannierecookie.services.js?v=' + bannierecookie.version,
            linkElement = document.createElement('link'),
            defaults = {
                "adblocker": false,
                "hashtag": '#bannierecookie',
                "cookieName": 'bannierecookie',
                "highPrivacy": true,
                "orientation": "middle",
                "removeCredit": false,
                "showAlertSmall": true,
                "cookieslist": true,
                "handleBrowserDNTRequest": false,
                "AcceptAllCta" : true,
                "moreInfoLink": true,
                "privacyUrl": "",
                "useExternalCss": false
            },
            params = bannierecookie.parameters;

        // Step -1      
        if (typeof bannierecookieCustomPremium !== 'undefined') {        
            bannierecookieCustomPremium();       
        }
        
        // Step 0: get params
        if (params !== undefined) {

            for (var k in defaults) {
                if(!bannierecookie.parameters.hasOwnProperty(k)) {
                    bannierecookie.parameters[k] = defaults[k];
                }
            }
        }

        // global
        bannierecookie.orientation = bannierecookie.parameters.orientation;
        bannierecookie.hashtag = bannierecookie.parameters.hashtag;
        bannierecookie.highPrivacy = bannierecookie.parameters.highPrivacy;
        bannierecookie.handleBrowserDNTRequest = bannierecookie.parameters.handleBrowserDNTRequest;

        // Step 1: load css
        if ( !bannierecookie.parameters.useExternalCss ) {
            linkElement.rel = 'stylesheet';
            linkElement.type = 'text/css';
            linkElement.href = cdn + 'css/bannierecookie.css?v=' + bannierecookie.version;
            document.getElementsByTagName('head')[0].appendChild(linkElement);
        }
        // Step 2: load language and services
        bannierecookie.addScript(pathToLang, '', function () {

          if(bannierecookieCustomText !== ''){
            bannierecookie.lang = bannierecookie.AddOrUpdate(bannierecookie.lang, bannierecookieCustomText);
          }
            bannierecookie.addScript(pathToServices, '', function () {


                // css for new middle bar
                if (bannierecookie.orientation === 'middle') {
                    var customThemeMiddle = document.createElement('style'),
                        cssRuleMiddle = 'div#bannierecookieAlertBig:before {content: \'' + bannierecookie.lang.middleBarHead + '\';font-size: 50px;}body #bannierecookieRoot div#bannierecookieAlertBig {width: 60%;min-width: 285px;height: auto;margin: auto;left: 50%;top: 50%;transform: translate(-50%, -50%);box-shadow: 0 0 9000px #000;border-radius: 20px;padding: 50px 0;}span#bannierecookieDisclaimerAlert {padding: 0 30px;}#bannierecookieRoot span#bannierecookieDisclaimerAlert {margin: 50px 0;display: block;text-align: center;font-size: 21px;}';

                    customThemeMiddle.type = 'text/css';
                    if (customThemeMiddle.styleSheet) {
                        customThemeMiddle.styleSheet.cssText = cssRuleMiddle;
                    } else {
                        customThemeMiddle.appendChild(document.createTextNode(cssRuleMiddle));
                    }
                    document.getElementsByTagName('head')[0].appendChild(customThemeMiddle);
                }

                var body = document.body,
                    div = document.createElement('div'),
                    html = '',
                    index,
                    orientation = 'Top',
                    cat = ['ads', 'analytic', 'api', 'comment', 'social', 'support', 'video', 'other'],
                    i;

                cat = cat.sort(function (a, b) {
                    if (bannierecookie.lang[a].title > bannierecookie.lang[b].title) { return 1; }
                    if (bannierecookie.lang[a].title < bannierecookie.lang[b].title) { return -1; }
                    return 0;
                });

                // Step 3: prepare the html
                //html += '<div id="bannierecookiePremium"></div>';
                html += '<button type="button" id="bannierecookieBack" onclick="bannierecookie.userInterface.closePanel();" aria-label="' + bannierecookie.lang.close + '"></button>';
                html += '<div id="bannierecookie" role="dialog" aria-labelledby="dialogTitle">';
                html += '   <button type="button" id="bannierecookieClosePanel" onclick="bannierecookie.userInterface.closePanel();">';
                html += '       ' + bannierecookie.lang.close;
                html += '   </button>';
                html += '   <div id="bannierecookieServices">';
                html += '      <div class="bannierecookieLine bannierecookieMainLine" id="bannierecookieMainLineOffset">';
                html += '         <img src="img/logos/Logo_cbnm_100.jpg" alt="CBN Mascarin" style="display: block; margin-left: auto; margin-right: auto;">';
                html += '         <span class="bannierecookieH1" role="heading" aria-level="1" id="dialogTitle">'+ bannierecookie.lang.title + '</span>';
                html += '         <div id="bannierecookieInfo" class="bannierecookieInfoBox">';
                html += '         ' + bannierecookie.lang.disclaimer;
                if (bannierecookie.parameters.privacyUrl !== "") {
                    html += '   <br/><br/>';
                    html += '   <button type="button" id="bannierecookiePrivacyUrlDialog" onclick="document.location = bannierecookie.parameters.privacyUrl">';
                    html += '       ' + bannierecookie.lang.privacyUrl;
                    html += '   </button>';
                }
                html += '         </div>';
                html += '         <div class="bannierecookieName">';
                html += '            <span class="bannierecookieH2" role="heading" aria-level="2">' + bannierecookie.lang.all + '</span>';
                html += '         </div>';
                html += '         <div class="bannierecookieAsk" id="bannierecookieScrollbarAdjust">';
                html += '            <button type="button" id="bannierecookieAllAllowed" class="bannierecookieAllow" onclick="bannierecookie.userInterface.respondAll(true);">';
                html += '               &#10003; ' + bannierecookie.lang.allowAll;
                html += '            </button> ';
                html += '            <button type="button" id="bannierecookieAllDenied" class="bannierecookieDeny" onclick="bannierecookie.userInterface.respondAll(false);">';
                html += '               &#10007; ' + bannierecookie.lang.denyAll;
                html += '            </button>';
                html += '         </div>';
                html += '      </div>';
                html += '      <div class="bannierecookieBorder">';
                html += '         <div class="clear"></div><ul>';
                for (i = 0; i < cat.length; i += 1) {
                    html += '         <li id="bannierecookieServicesTitle_' + cat[i] + '" class="bannierecookieHidden">';
                    html += '            <div class="bannierecookieTitle">';
                    html += '               <button type="button" onclick="bannierecookie.userInterface.toggle(\'bannierecookieDetails' + cat[i] + '\', \'bannierecookieInfoBox\');return false">&#10011; ' + bannierecookie.lang[cat[i]].title + '</button>';
                    html += '            </div>';
                    html += '            <div id="bannierecookieDetails' + cat[i] + '" class="bannierecookieDetails bannierecookieInfoBox">';
                    html += '               ' + bannierecookie.lang[cat[i]].details;
                    html += '            </div>';
                    html += '         <ul id="bannierecookieServices_' + cat[i] + '"></ul></li>';
                }
                html += '             <li id="bannierecookieNoServicesTitle" class="bannierecookieLine">' + bannierecookie.lang.noServices + '</li>';
                html += '         </ul>';
                html += '         <div class="bannierecookieHidden" id="bannierecookieScrollbarChild" style="height:20px;display:block"></div>';
                if (bannierecookie.parameters.removeCredit === false) {
                    html += '     <a class="bannierecookieSelfLink" href="https://opt-out.ferank.eu/" rel="nofollow noreferrer noopener" target="_blank" title="bannierecookie ' + bannierecookie.lang.newWindow + '">🍋 ' + bannierecookie.lang.credit + '</a>';
                }
                html += '       </div>';
                html += '   </div>';
                html += '</div>';

                if (bannierecookie.parameters.orientation === 'bottom') {
                    orientation = 'Bottom';
                }

                if (bannierecookie.parameters.highPrivacy && !bannierecookie.parameters.AcceptAllCta) {
                    html += '<div id="bannierecookieAlertBig" class="bannierecookieAlertBig' + orientation + '">';
                    //html += '<div class="bannierecookieAlertBigWrapper">';
                    html += '   <span id="bannierecookieDisclaimerAlert">';
                    html += '       ' + bannierecookie.lang.alertBigPrivacy;
                    html += '   </span>';
                    //html += '   <span class="bannierecookieAlertBigBtnWrapper">';
                    html += '   <button type="button" id="bannierecookiePersonalize" onclick="bannierecookie.userInterface.openPanel();">';
                    html += '       ' + bannierecookie.lang.personalize;
                    html += '   </button>';

                    if (bannierecookie.parameters.privacyUrl !== "") {
                        html += '   <button type="button" id="bannierecookiePrivacyUrl" onclick="document.location = bannierecookie.parameters.privacyUrl">';
                        html += '       ' + bannierecookie.lang.privacyUrl;
                        html += '   </button>';
                    }
                    
                    //html += '   </span>';
                    //html += '</div>';
                    html += '</div>';
                } else {
                    html += '<div id="bannierecookieAlertBig" class="bannierecookieAlertBig' + orientation + '">';
                    //html += '<div class="bannierecookieAlertBigWrapper">';
                    html += '   <span id="bannierecookieDisclaimerAlert">';

                    if (bannierecookie.parameters.highPrivacy) {
                        html += '       ' + bannierecookie.lang.alertBigPrivacy;
                    } else {
                        html += '       ' + bannierecookie.lang.alertBigClick + ' ' + bannierecookie.lang.alertBig;
                    }

                    html += '   </span>';
                    //html += '   <span class="bannierecookieAlertBigBtnWrapper">';
                    html += '   <button type="button" id="bannierecookiePersonalize" onclick="bannierecookie.userInterface.respondAll(true);">';
                    html += '       &#10003; ' + bannierecookie.lang.acceptAll;
                    html += '   </button>';
                    html += '   <button type="button" id="bannierecookieCloseAlert" onclick="bannierecookie.userInterface.openPanel();">';
                    html += '       ' + bannierecookie.lang.personalize;
                    html += '   </button>';

                    if (bannierecookie.parameters.privacyUrl !== "") {
                        html += '   <button type="button" id="bannierecookiePrivacyUrl" onclick="document.location = bannierecookie.parameters.privacyUrl">';
                        html += '       ' + bannierecookie.lang.privacyUrl;
                        html += '   </button>';
                    }

                    //html += '   </span>';
                    //html += '</div>';
                    html += '</div>';
                    html += '<div id="bannierecookiePercentage"></div>';
                }

                if (bannierecookie.parameters.showAlertSmall === true) {
                    html += '<div id="bannierecookieAlertSmall" class="bannierecookieAlertSmall' + orientation + '">';
                    html += '   <button type="button" id="bannierecookieManager" onclick="bannierecookie.userInterface.openPanel();">';
                    html += '       ' + bannierecookie.lang.alertSmall;
                    html += '       <span id="bannierecookieDot">';
                    html += '           <span id="bannierecookieDotGreen"></span>';
                    html += '           <span id="bannierecookieDotYellow"></span>';
                    html += '           <span id="bannierecookieDotRed"></span>';
                    html += '       </span>';
                    if (bannierecookie.parameters.cookieslist === true) {
                        html += '   </button><!-- @whitespace';
                        html += '   --><button type="button" id="bannierecookieCookiesNumber" onclick="bannierecookie.userInterface.toggleCookiesList();">0</button>';
                        html += '   <div id="bannierecookieCookiesListContainer">';
                        html += '       <button type="button" id="bannierecookieClosePanelCookie" onclick="bannierecookie.userInterface.closePanel();">';
                        html += '           ' + bannierecookie.lang.close;
                        html += '       </button>';
                        html += '       <div class="bannierecookieCookiesListMain" id="bannierecookieCookiesTitle">';
                        html += '            <span class="bannierecookieH2" role="heading" aria-level="2" id="bannierecookieCookiesNumberBis">0 cookie</span>';
                        html += '       </div>';
                        html += '       <div id="bannierecookieCookiesList"></div>';
                        html += '    </div>';
                    } else {
                        html += '   </div>';
                    }
                    html += '</div>';
                }

                bannierecookie.addScript(bannierecookie.cdn + 'advertising.js?v=' + bannierecookie.version, '', function () {
                    if (bannierecookieNoAdBlocker === true || bannierecookie.parameters.adblocker === false) {

                        // create a wrapper container at the same level than bannierecookie so we can add an aria-hidden when bannierecookie is opened
                        /*var wrapper = document.createElement('div');
                        wrapper.id = "contentWrapper";

                        while (document.body.firstChild)
                        {
                            wrapper.appendChild(document.body.firstChild);
                        }

                        // Append the wrapper to the body
                        document.body.appendChild(wrapper);*/

                        div.id = 'bannierecookieRoot';
                        body.appendChild(div, body);
                        div.innerHTML = html;
                        
                        //ie compatibility
                        var tacRootAvailableEvent;
                        if(typeof(Event) === 'function') {
                            tacRootAvailableEvent = new Event("tac.root_available");
                        }else{
                            tacRootAvailableEvent = document.createEvent('Event');
                            tacRootAvailableEvent.initEvent("tac.root_available", true, true);
                        }
                        //end ie compatibility
                        
                        window.dispatchEvent(tacRootAvailableEvent);

                        if (bannierecookie.job !== undefined) {
                            bannierecookie.job = bannierecookie.cleanArray(bannierecookie.job);
                            for (index = 0; index < bannierecookie.job.length; index += 1) {
                                bannierecookie.addService(bannierecookie.job[index]);
                            }
                        } else {
                            bannierecookie.job = []
                        }

                        bannierecookie.isAjax = true;

                        bannierecookie.job.push = function (id) {

                            // ie <9 hack
                            if (typeof bannierecookie.job.indexOf === 'undefined') {
                                bannierecookie.job.indexOf = function (obj, start) {
                                    var i,
                                        j = this.length;
                                    for (i = (start || 0); i < j; i += 1) {
                                        if (this[i] === obj) { return i; }
                                    }
                                    return -1;
                                };
                            }

                            if (bannierecookie.job.indexOf(id) === -1) {
                                Array.prototype.push.call(this, id);
                            }
                            bannierecookie.launch[id] = false;
                            bannierecookie.addService(id);
                        };

                        if (document.location.hash === bannierecookie.hashtag && bannierecookie.hashtag !== '') {
                            bannierecookie.userInterface.openPanel();
                        }

                        bannierecookie.cookie.number();
                        setInterval(bannierecookie.cookie.number, 60000);
                    }
                }, bannierecookie.parameters.adblocker);

                if (bannierecookie.parameters.adblocker === true) {
                    setTimeout(function () {
                        if (bannierecookieNoAdBlocker === false) {
                            html = '<div id="bannierecookieAlertBig" class="bannierecookieAlertBig' + orientation + '" style="display:block" role="alert" aria-live="polite">';
                            html += '   <p id="bannierecookieDisclaimerAlert">';
                            html += '       ' + bannierecookie.lang.adblock + '<br/>';
                            html += '       <strong>' + bannierecookie.lang.adblock_call + '</strong>';
                            html += '   </p>';
                            html += '   <button type="button" id="bannierecookiePersonalize" onclick="location.reload();">';
                            html += '       ' + bannierecookie.lang.reload;
                            html += '   </button>';
                            html += '</div>';
                            //html += '<div id="bannierecookiePremium"></div>';

                            div.id = 'bannierecookieRoot';
                            body.appendChild(div, body);
                            div.innerHTML = html;
                        }
                    }, 1500);
                }
            });
        });

        if(bannierecookie.events.load) {
            bannierecookie.events.load();
        }
    },
    "addService": function (serviceId) {
        "use strict";
        var html = '',
            s = bannierecookie.services,
            service = s[serviceId],
            cookie = bannierecookie.cookie.read(),
            hostname = document.location.hostname,
            hostRef = document.referrer.split('/')[2],
            isNavigating = (hostRef === hostname && window.location.href !== bannierecookie.parameters.privacyUrl) ? true : false,
            isAutostart = (!service.needConsent) ? true : false,
            isWaiting = (cookie.indexOf(service.key + '=wait') >= 0) ? true : false,
            isDenied = (cookie.indexOf(service.key + '=false') >= 0) ? true : false,
            isAllowed = (cookie.indexOf(service.key + '=true') >= 0) ? true : false,
            isResponded = (cookie.indexOf(service.key + '=false') >= 0 || cookie.indexOf(service.key + '=true') >= 0) ? true : false,
            isDNTRequested = (navigator.doNotTrack === "1" || navigator.doNotTrack === "yes" || navigator.msDoNotTrack === "1" || window.doNotTrack === "1") ? true : false;

        if (bannierecookie.added[service.key] !== true) {
            bannierecookie.added[service.key] = true;

            html += '<li id="' + service.key + 'Line" class="bannierecookieLine">';
            html += '   <div class="bannierecookieName">';
            html += '       <span class="bannierecookieH3" role="heading" aria-level="3">' + service.name + '</span>';
            html += '       <span id="tacCL' + service.key + '" class="bannierecookieListCookies"></span><br/>';

            if (bannierecookie.parameters.moreInfoLink == true) {

                var link = 'https://opt-out.ferank.eu/service/' + service.key + '/';
                if (service.readmoreLink !== undefined && service.readmoreLink !== '') {
                    link = service.readmoreLink;
                }
                if (bannierecookie.parameters.readmoreLink !== undefined && bannierecookie.parameters.readmoreLink !== '') {
                    link = bannierecookie.parameters.readmoreLink;
                }
                html += '       <a href="' + link + '" target="_blank" rel="noreferrer noopener" title="'+ bannierecookie.lang.cookieDetail + ' ' + service.name + ' ' + bannierecookie.lang.ourSite + ' ' + bannierecookie.lang.newWindow +'">';
                html += '           ' + bannierecookie.lang.more;
                html += '       </a>';
                html += '        - ';
                html += '       <a href="' + service.uri + '" target="_blank" rel="noreferrer noopener" title="' + service.name + ' ' + bannierecookie.lang.newWindow + '">';
                html += '           ' + bannierecookie.lang.source;
                html += '       </a>';
            }

            html += '   </div>';
            html += '   <div class="bannierecookieAsk">';
            html += '       <button type="button" id="' + service.key + 'Allowed" class="bannierecookieAllow" onclick="bannierecookie.userInterface.respond(this, true);">';
            html += '           &#10003; ' + bannierecookie.lang.allow;
            html += '       </button> ';
            html += '       <button type="button" id="' + service.key  + 'Denied" class="bannierecookieDeny" onclick="bannierecookie.userInterface.respond(this, false);">';
            html += '           &#10007; ' + bannierecookie.lang.deny;
            html += '       </button>';
            html += '   </div>';
            html += '</li>';

            bannierecookie.userInterface.css('bannierecookieServicesTitle_' + service.type, 'display', 'block');

            if (document.getElementById('bannierecookieServices_' + service.type) !== null) {
                document.getElementById('bannierecookieServices_' + service.type).innerHTML += html;
            }

            bannierecookie.userInterface.css('bannierecookieNoServicesTitle', 'display', 'none');

            bannierecookie.userInterface.order(service.type);
        }

        bannierecookie.pro('!' + service.key + '=' + isAllowed);

        // allow by default for non EU
        if (isResponded === false && bannierecookie.user.bypass === true) {
            isAllowed = true;
            bannierecookie.cookie.create(service.key, true);
        }

        if ((!isResponded && (isAutostart || (isNavigating && isWaiting)) && !bannierecookie.highPrivacy) || isAllowed) {
            if (!isAllowed) {
                bannierecookie.cookie.create(service.key, true);
            }
            if (bannierecookie.launch[service.key] !== true) {
                bannierecookie.launch[service.key] = true;
                service.js();
                bannierecookie.sendEvent(service.key + '_loaded');
            }
            bannierecookie.state[service.key] = true;
            bannierecookie.userInterface.color(service.key, true);
        } else if (isDenied) {
            if (typeof service.fallback === 'function') {
                service.fallback();
            }
            bannierecookie.state[service.key] = false;
            bannierecookie.userInterface.color(service.key, false);
        } else if (!isResponded && isDNTRequested && bannierecookie.handleBrowserDNTRequest) {
            bannierecookie.cookie.create(service.key, 'false');
            if (typeof service.fallback === 'function') {
                service.fallback();
            }
            bannierecookie.state[service.key] = false;
            bannierecookie.userInterface.color(service.key, false);
        } else if (!isResponded) {
            bannierecookie.cookie.create(service.key, 'wait');
            if (typeof service.fallback === 'function') {
                service.fallback();
            }
            bannierecookie.userInterface.color(service.key, 'wait');
            bannierecookie.userInterface.openAlert();
        }

        bannierecookie.cookie.checkCount(service.key);
    },
    "sendEvent" : function(event_key) {
        if(event_key !== undefined) {
            //ie compatibility
            var send_event_item;
            if(typeof(Event) === 'function') {
                send_event_item = new Event(event_key);
            }else{
                send_event_item = document.createEvent('Event');
                send_event_item.initEvent(event_key, true, true);
            }
            //end ie compatibility

            document.dispatchEvent(send_event_item);
        }
    },
    "cleanArray": function cleanArray(arr) {
        "use strict";
        var i,
            len = arr.length,
            out = [],
            obj = {},
            s = bannierecookie.services;

        for (i = 0; i < len; i += 1) {
            if (!obj[arr[i]]) {
                obj[arr[i]] = {};
                if (bannierecookie.services[arr[i]] !== undefined) {
                    out.push(arr[i]);
                }
            }
        }

        out = out.sort(function (a, b) {
            if (s[a].type + s[a].key > s[b].type + s[b].key) { return 1; }
            if (s[a].type + s[a].key < s[b].type + s[b].key) { return -1; }
            return 0;
        });

        return out;
    },
    "userInterface": {
        "css": function (id, property, value) {
            "use strict";
            if (document.getElementById(id) !== null) {
                document.getElementById(id).style[property] = value;
            }
        },
        "addClass": function (id, className) {
            "use strict";
            if (document.getElementById(id) !== null) {
                document.getElementById(id).classList.add(className);
            }
        },
        "removeClass": function (id, className) {
            "use strict";
            if (document.getElementById(id) !== null) {
                document.getElementById(id).classList.remove(className);
            }
        },
        "respondAll": function (status) {
            "use strict";
            var s = bannierecookie.services,
                service,
                key,
                index = 0;

            for (index = 0; index < bannierecookie.job.length; index += 1) {
                service = s[bannierecookie.job[index]];
                key = service.key;
                if (bannierecookie.state[key] !== status) {
                    if (status === false && bannierecookie.launch[key] === true) {
                        bannierecookie.reloadThePage = true;
                    }
                    if (bannierecookie.launch[key] !== true && status === true) {

                        bannierecookie.pro('!' + key + '=engage');

                        bannierecookie.launch[key] = true;
                        bannierecookie.services[key].js();
                    }
                    bannierecookie.state[key] = status;
                    bannierecookie.cookie.create(key, status);
                    bannierecookie.userInterface.color(key, status);
                }
            }
        },
        "respond": function (el, status) {
            "use strict";
            var key = el.id.replace(new RegExp("(Eng[0-9]+|Allow|Deni)ed", "g"), '');

            // return if same state
            if (bannierecookie.state[key] === status) {
                return;
            }

            if (status === false && bannierecookie.launch[key] === true) {
                bannierecookie.reloadThePage = true;
            }

            // if not already launched... launch the service
            if (status === true) {
                if (bannierecookie.launch[key] !== true) {

                    bannierecookie.pro('!' + key + '=engage');

                    bannierecookie.launch[key] = true;
                    bannierecookie.services[key].js();
                }
            }
            bannierecookie.state[key] = status;
            bannierecookie.cookie.create(key, status);
            bannierecookie.userInterface.color(key, status);
        },
        "color": function (key, status) {
            "use strict";
            var c = 'bannierecookie',
                nbDenied = 0,
                nbPending = 0,
                nbAllowed = 0,
                sum = bannierecookie.job.length,
                index;

            if (status === true) {
                document.getElementById(key + 'Line').classList.add('bannierecookieIsAllowed');
                document.getElementById(key + 'Line').classList.remove('bannierecookieIsDenied');
            } else if (status === false) {
                document.getElementById(key + 'Line').classList.remove('bannierecookieIsAllowed');
                document.getElementById(key + 'Line').classList.add('bannierecookieIsDenied');
            }

            // check if all services are allowed
            for (index = 0; index < sum; index += 1) {
                if (bannierecookie.state[bannierecookie.job[index]] === false) {
                    nbDenied += 1;
                } else if (bannierecookie.state[bannierecookie.job[index]] === undefined) {
                    nbPending += 1;
                } else if (bannierecookie.state[bannierecookie.job[index]] === true) {
                    nbAllowed += 1;
                }
            }

            bannierecookie.userInterface.css(c + 'DotGreen', 'width', ((100 / sum) * nbAllowed) + '%');
            bannierecookie.userInterface.css(c + 'DotYellow', 'width', ((100 / sum) * nbPending) + '%');
            bannierecookie.userInterface.css(c + 'DotRed', 'width', ((100 / sum) * nbDenied) + '%');

            if (nbDenied === 0 && nbPending === 0) {
                bannierecookie.userInterface.removeClass(c + 'AllDenied', c + 'IsSelected');
                bannierecookie.userInterface.addClass(c + 'AllAllowed', c + 'IsSelected');

                bannierecookie.userInterface.addClass(c + 'MainLineOffset', c + 'IsAllowed');
                bannierecookie.userInterface.removeClass(c + 'MainLineOffset', c + 'IsDenied');
            } else if (nbAllowed === 0 && nbPending === 0) {
                bannierecookie.userInterface.removeClass(c + 'AllAllowed', c + 'IsSelected');
                bannierecookie.userInterface.addClass(c + 'AllDenied', c + 'IsSelected');

                bannierecookie.userInterface.removeClass(c + 'MainLineOffset', c + 'IsAllowed');
                bannierecookie.userInterface.addClass(c + 'MainLineOffset', c + 'IsDenied');
            } else {
                bannierecookie.userInterface.removeClass(c + 'AllAllowed', c + 'IsSelected');
                bannierecookie.userInterface.removeClass(c + 'AllDenied', c + 'IsSelected');

                bannierecookie.userInterface.removeClass(c + 'MainLineOffset', c + 'IsAllowed');
                bannierecookie.userInterface.removeClass(c + 'MainLineOffset', c + 'IsDenied');
            }

            // close the alert if all service have been reviewed
            if (nbPending === 0) {
                bannierecookie.userInterface.closeAlert();
            }

            if (bannierecookie.services[key].cookies.length > 0 && status === false) {
                bannierecookie.cookie.purge(bannierecookie.services[key].cookies);
            }

            if (status === true) {
                if (document.getElementById('tacCL' + key) !== null) {
                    document.getElementById('tacCL' + key).innerHTML = '...';
                }
                setTimeout(function () {
                    bannierecookie.cookie.checkCount(key);
                }, 2500);
            } else {
                bannierecookie.cookie.checkCount(key);
            }
        },
        "openPanel": function () {
            "use strict";

            bannierecookie.userInterface.css('bannierecookie', 'display', 'block');
            bannierecookie.userInterface.css('bannierecookieBack', 'display', 'block');
            bannierecookie.userInterface.css('bannierecookieCookiesListContainer', 'display', 'none');

            document.getElementById('bannierecookieClosePanel').focus();
            document.getElementsByTagName('body')[0].classList.add('modal-open');
            bannierecookie.userInterface.focusTrap();
            bannierecookie.userInterface.jsSizing('main');
            
            //ie compatibility
            var tacOpenPanelEvent;
            if(typeof(Event) === 'function') {
                tacOpenPanelEvent = new Event("tac.open_panel");
            }else{
                tacOpenPanelEvent = document.createEvent('Event');
                tacOpenPanelEvent.initEvent("tac.open_panel", true, true);
            }
            //end ie compatibility
            
            window.dispatchEvent(tacOpenPanelEvent);
        },
        "closePanel": function () {
            "use strict";

            if (document.location.hash === bannierecookie.hashtag) {
                if (window.history) {
                    window.history.replaceState('', document.title, window.location.pathname + window.location.search);
                } else {
                    document.location.hash = '';
                }
            }
            bannierecookie.userInterface.css('bannierecookie', 'display', 'none');
            bannierecookie.userInterface.css('bannierecookieCookiesListContainer', 'display', 'none');

            bannierecookie.fallback(['bannierecookieInfoBox'], function (elem) {
                elem.style.display = 'none';
            }, true);

            if (bannierecookie.reloadThePage === true) {
                window.location.reload();
            } else {
                bannierecookie.userInterface.css('bannierecookieBack', 'display', 'none');
            }
            if (document.getElementById('bannierecookieCloseAlert') !== null) {
                document.getElementById('bannierecookieCloseAlert').focus();
            }
            document.getElementsByTagName('body')[0].classList.remove('modal-open');
            
            //ie compatibility
            var tacClosePanelEvent;
            if(typeof(Event) === 'function') {
                tacClosePanelEvent = new Event("tac.close_panel");
            }else{
                tacClosePanelEvent = document.createEvent('Event');
                tacClosePanelEvent.initEvent("tac.close_panel", true, true);
            }
            //end ie compatibility
            
            window.dispatchEvent(tacClosePanelEvent);
        },
        "focusTrap": function() {
            "use strict";

            var focusableEls,
                firstFocusableEl,
                lastFocusableEl,
                filtered;

            focusableEls = document.getElementById('bannierecookie').querySelectorAll('a[href], button');
            filtered = [];

            // get only visible items
            for (var i = 0, max = focusableEls.length; i < max; i++) {
                if (focusableEls[i].offsetHeight > 0) {
                   filtered.push(focusableEls[i]);
                }
            }

            firstFocusableEl = filtered[0];
            lastFocusableEl = filtered[filtered.length - 1];

            //loop focus inside bannierecookie
            document.getElementById('bannierecookie').addEventListener("keydown", function (evt) {

                if ( evt.key === 'Tab' || evt.keyCode === 9 ) {

                    if ( evt.shiftKey ) /* shift + tab */ {
                        if (document.activeElement === firstFocusableEl) {
                            lastFocusableEl.focus();
                            evt.preventDefault();
                        }
                    } else /* tab */ {
                        if (document.activeElement === lastFocusableEl) {
                            firstFocusableEl.focus();
                            evt.preventDefault();
                        }
                    }
                }
            })
        },
        "openAlert": function () {
            "use strict";
            var c = 'bannierecookie';
            bannierecookie.userInterface.css(c + 'Percentage', 'display', 'block');
            bannierecookie.userInterface.css(c + 'AlertSmall', 'display', 'none');
            bannierecookie.userInterface.css(c + 'AlertBig',   'display', 'block');
            
            //ie compatibility
            var tacOpenAlertEvent;
            if(typeof(Event) === 'function') {
                tacOpenAlertEvent = new Event("tac.open_alert");
            }else{
                tacOpenAlertEvent = document.createEvent('Event');
                tacOpenAlertEvent.initEvent("tac.open_alert", true, true);
            }
            //end ie compatibility
            
            window.dispatchEvent(tacOpenAlertEvent);
        },
        "closeAlert": function () {
            "use strict";
            var c = 'bannierecookie';
            bannierecookie.userInterface.css(c + 'Percentage', 'display', 'none');
            bannierecookie.userInterface.css(c + 'AlertSmall', 'display', 'block');
            bannierecookie.userInterface.css(c + 'AlertBig',   'display', 'none');
            bannierecookie.userInterface.jsSizing('box');
            
            //ie compatibility
            var tacCloseAlertEvent;
            if(typeof(Event) === 'function') {
                tacCloseAlertEvent = new Event("tac.close_alert");
            }else{
                tacCloseAlertEvent = document.createEvent('Event');
                tacCloseAlertEvent.initEvent("tac.close_alert", true, true);
            }
            //end ie compatibility
            
            window.dispatchEvent(tacCloseAlertEvent);
        },
        "toggleCookiesList": function () {
            "use strict";
            var div = document.getElementById('bannierecookieCookiesListContainer');

            if (div === null) {
                return;
            }

            if (div.style.display !== 'block') {
                bannierecookie.cookie.number();
                div.style.display = 'block';
                bannierecookie.userInterface.jsSizing('cookie');
                bannierecookie.userInterface.css('bannierecookie', 'display', 'none');
                bannierecookie.userInterface.css('bannierecookieBack', 'display', 'block');
                bannierecookie.fallback(['bannierecookieInfoBox'], function (elem) {
                    elem.style.display = 'none';
                }, true);
            } else {
                div.style.display = 'none';
                bannierecookie.userInterface.css('bannierecookie', 'display', 'none');
                bannierecookie.userInterface.css('bannierecookieBack', 'display', 'none');
            }
        },
        "toggle": function (id, closeClass) {
            "use strict";
            var div = document.getElementById(id);

            if (div === null) {
                return;
            }

            if (closeClass !== undefined) {
                bannierecookie.fallback([closeClass], function (elem) {
                    if (elem.id !== id) {
                        elem.style.display = 'none';
                    }
                }, true);
            }

            if (div.style.display !== 'block') {
                div.style.display = 'block';
            } else {
                div.style.display = 'none';
            }
        },
        "order": function (id) {
            "use strict";
            var main = document.getElementById('bannierecookieServices_' + id),
                allDivs,
                store = [],
                i;

            if (main === null) {
                return;
            }

            allDivs = main.childNodes;

            if (typeof Array.prototype.map === 'function' && typeof Enumerable === 'undefined') {
                Array.prototype.map.call(main.children, Object).sort(function (a, b) {
                //var mainChildren = Array.from(main.children);
                //mainChildren.sort(function (a, b) {
                    if (bannierecookie.services[a.id.replace(/Line/g, '')].name > bannierecookie.services[b.id.replace(/Line/g, '')].name) { return 1; }
                    if (bannierecookie.services[a.id.replace(/Line/g, '')].name < bannierecookie.services[b.id.replace(/Line/g, '')].name) { return -1; }
                    return 0;
                }).forEach(function (element) {
                    main.appendChild(element);
                });
            }
        },
        "jsSizing": function (type) {
            "use strict";
            var scrollbarMarginRight = 10,
                scrollbarWidthParent,
                scrollbarWidthChild,
                servicesHeight,
                e = window,
                a = 'inner',
                windowInnerHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
                mainTop,
                mainHeight,
                closeButtonHeight,
                headerHeight,
                cookiesListHeight,
                cookiesCloseHeight,
                cookiesTitleHeight,
                paddingBox,
                alertSmallHeight,
                cookiesNumberHeight;

            if (type === 'box') {
                if (document.getElementById('bannierecookieAlertSmall') !== null && document.getElementById('bannierecookieCookiesNumber') !== null) {

                    // reset
                    bannierecookie.userInterface.css('bannierecookieCookiesNumber', 'padding', '0px 10px');

                    // calculate
                    alertSmallHeight = document.getElementById('bannierecookieAlertSmall').offsetHeight;
                    cookiesNumberHeight = document.getElementById('bannierecookieCookiesNumber').offsetHeight;
                    paddingBox = (alertSmallHeight - cookiesNumberHeight) / 2;

                    // apply
                    bannierecookie.userInterface.css('bannierecookieCookiesNumber', 'padding', paddingBox + 'px 10px');
                }
            } else if (type === 'main') {

                // get the real window width for media query
                if (window.innerWidth === undefined) {
                    a = 'client';
                    e = document.documentElement || document.body;
                }

                // height of the services list container
                if (document.getElementById('bannierecookie') !== null && document.getElementById('bannierecookieClosePanel') !== null && document.getElementById('bannierecookieMainLineOffset') !== null) {

                    // reset
                    bannierecookie.userInterface.css('bannierecookieServices', 'height', 'auto');

                    // calculate
                    mainHeight = document.getElementById('bannierecookie').offsetHeight;
                    closeButtonHeight = document.getElementById('bannierecookieClosePanel').offsetHeight;

                    // apply
                    servicesHeight = (mainHeight - closeButtonHeight + 2);
                    bannierecookie.userInterface.css('bannierecookieServices', 'height', servicesHeight + 'px');
                    bannierecookie.userInterface.css('bannierecookieServices', 'overflow-x', 'auto');
                }

                // align the main allow/deny button depending on scrollbar width
                if (document.getElementById('bannierecookieServices') !== null && document.getElementById('bannierecookieScrollbarChild') !== null) {

                    // media query
                    if (e[a + 'Width'] <= 479) {
                        bannierecookie.userInterface.css('bannierecookieScrollbarAdjust', 'marginLeft', '11px');
                    } else if (e[a + 'Width'] <= 767) {
                        scrollbarMarginRight = 12;
                    }

                    scrollbarWidthParent = document.getElementById('bannierecookieServices').offsetWidth;
                    scrollbarWidthChild = document.getElementById('bannierecookieScrollbarChild').offsetWidth;
                    bannierecookie.userInterface.css('bannierecookieScrollbarAdjust', 'marginRight', ((scrollbarWidthParent - scrollbarWidthChild) + scrollbarMarginRight) + 'px');
                }

                // center the main panel
                if (document.getElementById('bannierecookie') !== null) {

                    // media query
                    if (e[a + 'Width'] <= 767) {
                        mainTop = 0;
                    } else {
                        mainTop = ((windowInnerHeight - document.getElementById('bannierecookie').offsetHeight) / 2) - 21;
                    }

                    if (document.getElementById('bannierecookieMainLineOffset') !== null) {
                        if (document.getElementById('bannierecookie').offsetHeight < (windowInnerHeight / 2)) {
                            mainTop -= document.getElementById('bannierecookieMainLineOffset').offsetHeight;
                        }
                    }

                    // correct
                    if (mainTop < 0) {
                        mainTop = 0;
                    }

                    // apply
                    bannierecookie.userInterface.css('bannierecookie', 'top', mainTop + 'px');
                }


            } else if (type === 'cookie') {

                // put cookies list at bottom
                if (document.getElementById('bannierecookieAlertSmall') !== null) {
                    bannierecookie.userInterface.css('bannierecookieCookiesListContainer', 'bottom', (document.getElementById('bannierecookieAlertSmall').offsetHeight) + 'px');
                }

                // height of cookies list
                if (document.getElementById('bannierecookieCookiesListContainer') !== null) {

                    // reset
                    bannierecookie.userInterface.css('bannierecookieCookiesList', 'height', 'auto');

                    // calculate
                    cookiesListHeight = document.getElementById('bannierecookieCookiesListContainer').offsetHeight;
                    cookiesCloseHeight = document.getElementById('bannierecookieClosePanelCookie').offsetHeight;
                    cookiesTitleHeight = document.getElementById('bannierecookieCookiesTitle').offsetHeight;

                    // apply
                    bannierecookie.userInterface.css('bannierecookieCookiesList', 'height', (cookiesListHeight - cookiesCloseHeight - cookiesTitleHeight - 2) + 'px');
                }
            }
        }
    },
    "cookie": {
        "owner": {},
        "create": function (key, status) {
            "use strict";

            if (bannierecookieForceExpire !== '') {
                // The number of day(s)/hour(s) can't be higher than 1 year
                if ((bannierecookieExpireInDay && bannierecookieForceExpire < 365) || (!bannierecookieExpireInDay && bannierecookieForceExpire < 8760)) {
                    if (bannierecookieExpireInDay) {
                        // Multiplication to tranform the number of days to milliseconds
                        timeExpire = bannierecookieForceExpire * 86400000;
                    } else {
                        // Multiplication to tranform the number of hours to milliseconds
                        timeExpire = bannierecookieForceExpire * 3600000;
                    }
                }
            }

            var d = new Date(),
                time = d.getTime(),
                expireTime = time + timeExpire, // 365 days
                regex = new RegExp("!" + key + "=(wait|true|false)", "g"),
                cookie = bannierecookie.cookie.read().replace(regex, ""),
                value = bannierecookie.parameters.cookieName + '=' + cookie + '!' + key + '=' + status,
                domain = (bannierecookie.parameters.cookieDomain !== undefined && bannierecookie.parameters.cookieDomain !== '') ? 'domain=' + bannierecookie.parameters.cookieDomain + ';' : '';

            d.setTime(expireTime);
            document.cookie = value + '; expires=' + d.toGMTString() + '; path=/;' + domain;
        },
        "read": function () {
            "use strict";
            var nameEQ = bannierecookie.parameters.cookieName + "=",
                ca = document.cookie.split(';'),
                i,
                c;

            for (i = 0; i < ca.length; i += 1) {
                c = ca[i];
                while (c.charAt(0) === ' ') {
                    c = c.substring(1, c.length);
                }
                if (c.indexOf(nameEQ) === 0) {
                    return c.substring(nameEQ.length, c.length);
                }
            }
            return '';
        },
        "purge": function (arr) {
            "use strict";
            var i;

            for (i = 0; i < arr.length; i += 1) {
                document.cookie = arr[i] + '=; expires=Thu, 01 Jan 2000 00:00:00 GMT; path=/;';
                document.cookie = arr[i] + '=; expires=Thu, 01 Jan 2000 00:00:00 GMT; path=/; domain=.' + location.hostname + ';';
                document.cookie = arr[i] + '=; expires=Thu, 01 Jan 2000 00:00:00 GMT; path=/; domain=.' + location.hostname.split('.').slice(-2).join('.') + ';';
            }
        },
        "checkCount": function (key) {
            "use strict";
            var arr = bannierecookie.services[key].cookies,
                nb = arr.length,
                nbCurrent = 0,
                html = '',
                i,
                status = document.cookie.indexOf(key + '=true');

            if (status >= 0 && nb === 0) {
                html += bannierecookie.lang.useNoCookie;
            } else if (status >= 0) {
                for (i = 0; i < nb; i += 1) {
                    if (document.cookie.indexOf(arr[i] + '=') !== -1) {
                        nbCurrent += 1;
                        if (bannierecookie.cookie.owner[arr[i]] === undefined) {
                            bannierecookie.cookie.owner[arr[i]] = [];
                        }
                        if (bannierecookie.cookie.crossIndexOf(bannierecookie.cookie.owner[arr[i]], bannierecookie.services[key].name) === false) {
                            bannierecookie.cookie.owner[arr[i]].push(bannierecookie.services[key].name);
                        }
                    }
                }

                if (nbCurrent > 0) {
                    html += bannierecookie.lang.useCookieCurrent + ' ' + nbCurrent + ' cookie';
                    if (nbCurrent > 1) {
                        html += 's';
                    }
                    html += '.';
                } else {
                    html += bannierecookie.lang.useNoCookie;
                }
            } else if (nb === 0) {
                html = bannierecookie.lang.noCookie;
            } else {
                html += bannierecookie.lang.useCookie + ' ' + nb + ' cookie';
                if (nb > 1) {
                    html += 's';
                }
                html += '.';
            }

            if (document.getElementById('tacCL' + key) !== null) {
                document.getElementById('tacCL' + key).innerHTML = html;
            }
        },
        "crossIndexOf": function (arr, match) {
            "use strict";
            var i;
            for (i = 0; i < arr.length; i += 1) {
                if (arr[i] === match) {
                    return true;
                }
            }
            return false;
        },
        "number": function () {
            "use strict";
            var cookies = document.cookie.split(';'),
                nb = (document.cookie !== '') ? cookies.length : 0,
                html = '',
                i,
                name,
                namea,
                nameb,
                c,
                d,
                s = (nb > 1) ? 's' : '',
                savedname,
                regex = /^https?\:\/\/([^\/?#]+)(?:[\/?#]|$)/i,
                regexedDomain = (bannierecookie.cdn.match(regex) !== null) ? bannierecookie.cdn.match(regex)[1] : bannierecookie.cdn,
                host = (bannierecookie.domain !== undefined) ? bannierecookie.domain : regexedDomain;

            cookies = cookies.sort(function (a, b) {
                namea = a.split('=', 1).toString().replace(/ /g, '');
                nameb = b.split('=', 1).toString().replace(/ /g, '');
                c = (bannierecookie.cookie.owner[namea] !== undefined) ? bannierecookie.cookie.owner[namea] : '0';
                d = (bannierecookie.cookie.owner[nameb] !== undefined) ? bannierecookie.cookie.owner[nameb] : '0';
                if (c + a > d + b) { return 1; }
                if (c + a < d + b) { return -1; }
                return 0;
            });

            if (document.cookie !== '') {
                for (i = 0; i < nb; i += 1) {
                    name = cookies[i].split('=', 1).toString().replace(/ /g, '');
                    if (bannierecookie.cookie.owner[name] !== undefined && bannierecookie.cookie.owner[name].join(' // ') !== savedname) {
                        savedname = bannierecookie.cookie.owner[name].join(' // ');
                        html += '<div class="bannierecookieHidden">';
                        html += '     <span class="bannierecookieTitle bannierecookieH3" role="heading" aria-level="3">';
                        html += '        ' + bannierecookie.cookie.owner[name].join(' // ');
                        html += '    </span>';
                        html += '</div><ul class="cookie-list">';
                    } else if (bannierecookie.cookie.owner[name] === undefined && host !== savedname) {
                        savedname = host;
                        html += '<div class="bannierecookieHidden">';
                        html += '     <span class="bannierecookieTitle bannierecookieH3" role="heading" aria-level="3">';
                        html += '        ' + host;
                        html += '    </span>';
                        html += '</div><ul class="cookie-list">';
                    }
                    html += '<li class="bannierecookieCookiesListMain">';
                    html += '    <div class="bannierecookieCookiesListLeft"><button type="button" onclick="bannierecookie.cookie.purge([\'' + cookies[i].split('=', 1) + '\']);bannierecookie.cookie.number();bannierecookie.userInterface.jsSizing(\'cookie\');return false"><strong>&times;</strong></button> <strong>' + name + '</strong>';
                    html += '    </div>';
                    html += '    <div class="bannierecookieCookiesListRight">' + cookies[i].split('=').slice(1).join('=') + '</div>';
                    html += '</li>';
                }
                html += '</ul>';
            } else {
                html += '<div class="bannierecookieCookiesListMain">';
                html += '    <div class="bannierecookieCookiesListLeft"><strong>-</strong></div>';
                html += '    <div class="bannierecookieCookiesListRight"></div>';
                html += '</div>';
            }

            html += '<div class="bannierecookieHidden" style="height:20px;display:block"></div>';

            if (document.getElementById('bannierecookieCookiesList') !== null) {
                document.getElementById('bannierecookieCookiesList').innerHTML = html;
            }

            if (document.getElementById('bannierecookieCookiesNumber') !== null) {
                document.getElementById('bannierecookieCookiesNumber').innerHTML = nb;
            }

            if (document.getElementById('bannierecookieCookiesNumberBis') !== null) {
                document.getElementById('bannierecookieCookiesNumberBis').innerHTML = nb + ' cookie' + s;
            }

            for (i = 0; i < bannierecookie.job.length; i += 1) {
                bannierecookie.cookie.checkCount(bannierecookie.job[i]);
            }
        }
    },
    "getLanguage": function () {
        "use strict";

        var availableLanguages = 'cs,en,fr,es,it,de,nl,pt,pl,ru,el',
            defaultLanguage = 'en';
        
        if (bannierecookieForceLanguage !== '') {
            if (availableLanguages.indexOf(bannierecookieForceLanguage) !== -1) {
                return bannierecookieForceLanguage;
            }
        }
        
        if (!navigator) { return 'en'; }
        
        var lang = navigator.language || navigator.browserLanguage ||
                navigator.systemLanguage || navigator.userLang || null,
            userLanguage = lang ? lang.substr(0, 2) : null;

        if (availableLanguages.indexOf(userLanguage) === -1) {
            return defaultLanguage;
        }
        return userLanguage;
    },
    "getLocale": function () {
        "use strict";
        if (!navigator) { return 'en_US'; }

        var lang = navigator.language || navigator.browserLanguage ||
                navigator.systemLanguage || navigator.userLang || null,
            userLanguage = lang ? lang.substr(0, 2) : null;

        if (userLanguage === 'fr') {
            return 'fr_FR';
        } else if (userLanguage === 'en') {
            return 'en_US';
        } else if (userLanguage === 'de') {
            return 'de_DE';
        } else if (userLanguage === 'es') {
            return 'es_ES';
        } else if (userLanguage === 'it') {
            return 'it_IT';
        } else if (userLanguage === 'pt') {
            return 'pt_PT';
        } else if (userLanguage === 'nl') {
            return 'nl_NL';
        } else if (userLanguage === 'el') {
            return 'el_EL';
        } else {
            return 'en_US';
        }
    },
    "addScript": function (url, id, callback, execute, attrName, attrVal) {
        "use strict";
        var script,
            done = false;

        if (execute === false) {
            if (typeof callback === 'function') {
                callback();
            }
        } else {
            script = document.createElement('script');
            script.type = 'text/javascript';
            script.id = (id !== undefined) ? id : '';
            script.async = true;
            script.src = url;

            if (attrName !== undefined && attrVal !== undefined) {
                script.setAttribute(attrName, attrVal);
            }

            if (typeof callback === 'function') {
                script.onreadystatechange = script.onload = function () {
                    var state = script.readyState;
                    if (!done && (!state || /loaded|complete/.test(state))) {
                        done = true;
                        callback();
                    }
                };
            }

            document.getElementsByTagName('head')[0].appendChild(script);
        }
    },
    "makeAsync": {
        "antiGhost": 0,
        "buffer": '',
        "init": function (url, id) {
            "use strict";
            var savedWrite = document.write,
                savedWriteln = document.writeln;

            document.write = function (content) {
                bannierecookie.makeAsync.buffer += content;
            };
            document.writeln = function (content) {
                bannierecookie.makeAsync.buffer += content.concat("\n");
            };

            setTimeout(function () {
                document.write = savedWrite;
                document.writeln = savedWriteln;
            }, 20000);

            bannierecookie.makeAsync.getAndParse(url, id);
        },
        "getAndParse": function (url, id) {
            "use strict";
            if (bannierecookie.makeAsync.antiGhost > 9) {
                bannierecookie.makeAsync.antiGhost = 0;
                return;
            }
            bannierecookie.makeAsync.antiGhost += 1;
            bannierecookie.addScript(url, '', function () {
                if (document.getElementById(id) !== null) {
                    document.getElementById(id).innerHTML += "<span style='display:none'>&nbsp;</span>" + bannierecookie.makeAsync.buffer;
                    bannierecookie.makeAsync.buffer = '';
                    bannierecookie.makeAsync.execJS(id);
                }
            });
        },
        "execJS": function (id) {
            /* not strict because third party scripts may have errors */
            var i,
                scripts,
                childId,
                type;

            if (document.getElementById(id) === null) {
                return;
            }

            scripts = document.getElementById(id).getElementsByTagName('script');
            for (i = 0; i < scripts.length; i += 1) {
                type = (scripts[i].getAttribute('type') !== null) ? scripts[i].getAttribute('type') : '';
                if (type === '') {
                    type = (scripts[i].getAttribute('language') !== null) ? scripts[i].getAttribute('language') : '';
                }
                if (scripts[i].getAttribute('src') !== null && scripts[i].getAttribute('src') !== '') {
                    childId = id + Math.floor(Math.random() * 99999999999);
                    document.getElementById(id).innerHTML += '<div id="' + childId + '"></div>';
                    bannierecookie.makeAsync.getAndParse(scripts[i].getAttribute('src'), childId);
                } else if (type.indexOf('javascript') !== -1 || type === '') {
                    eval(scripts[i].innerHTML);
                }
            }
        }
    },
    "fallback": function (matchClass, content, noInner) {
        "use strict";
        var elems = document.getElementsByTagName('*'),
            i,
            index = 0;

        for (i in elems) {
            if (elems[i] !== undefined) {
                for (index = 0; index < matchClass.length; index += 1) {
                    if ((' ' + elems[i].className + ' ')
                            .indexOf(' ' + matchClass[index] + ' ') > -1) {
                        if (typeof content === 'function') {
                            if (noInner === true) {
                                content(elems[i]);
                            } else {
                                elems[i].innerHTML = content(elems[i]);
                            }
                        } else {
                            elems[i].innerHTML = content;
                        }
                    }
                }
            }
        }
    },
    "engage": function (id) {
        "use strict";
        var html = '',
            r = Math.floor(Math.random() * 100000),
            engage = bannierecookie.services[id].name + ' ' + bannierecookie.lang.fallback;

        if (bannierecookie.lang['engage-' + id] !== undefined) {
            engage = bannierecookie.lang['engage-' + id];
        }

        html += '<div class="tac_activate">';
        html += '   <div class="tac_float">';
        html += '      ' + engage;
        html += '      <button type="button" class="bannierecookieAllow" id="Eng' + r + 'ed' + id + '" onclick="bannierecookie.userInterface.respond(this, true);">';
        html += '          &#10003; ' + bannierecookie.lang.allow;
        html += '       </button>';
        html += '   </div>';
        html += '</div>';

        return html;
    },
    "extend": function (a, b) {
        "use strict";
        var prop;
        for (prop in b) {
            if (b.hasOwnProperty(prop)) {
                a[prop] = b[prop];
            }
        }
    },
    "proTemp": '',
    "proTimer": function () {
        "use strict";
        setTimeout(bannierecookie.proPing, 500);
    },
    "pro": function (list) {
        "use strict";
        bannierecookie.proTemp += list;
        clearTimeout(bannierecookie.proTimer);
        bannierecookie.proTimer = setTimeout(bannierecookie.proPing, 500);
    },
    "proPing": function () {
        "use strict";
        if (bannierecookie.uuid !== '' && bannierecookie.uuid !== undefined && bannierecookie.proTemp !== '') {
            var div = document.getElementById('bannierecookiePremium'),
                timestamp = new Date().getTime(),
                url = 'https://opt-out.ferank.eu/log/?';
s
            if (div === null) {
                return;
            }

            url += 'account=' + bannierecookie.uuid + '&';
            url += 'domain=' + bannierecookie.domain + '&';
            url += 'status=' + encodeURIComponent(bannierecookie.proTemp) + '&';
            url += '_time=' + timestamp;

            div.innerHTML = '<img src="' + url + '" style="display:none" />';

            bannierecookie.proTemp = '';
        }

        bannierecookie.cookie.number();
    },
    "AddOrUpdate" : function(source, custom){
        /**
         Utility function to Add or update the fields of obj1 with the ones in obj2
         */
        for(key in custom){
            if(custom[key] instanceof Object){
                source[key] = bannierecookie.AddOrUpdate(source[key], custom[key]);
            }else{
                source[key] = custom[key];
            }
        }
        return source;
    },
    "getElemWidth": function(elem) {
        return elem.getAttribute('width') || elem.clientWidth;
    },
    "getElemHeight": function(elem) {
        return elem.getAttribute('height') || elem.clientHeight;
    }
};