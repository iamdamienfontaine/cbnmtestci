import { Component, OnInit } from '@angular/core';

declare var bannierecookie: any;

function  showCookie(){
  bannierecookie.init({
    "privacyUrl": "", /* URL de la page de la politique de vie privée */

    "hashtag": "#bannierecookie", /* Ouvrir le panneau contenant ce hashtag */
    "cookieName": "bannierecookie_cbnmcpie", /* Nom du Cookie */

    "orientation": "bottom", /* Position de la bannière (top - bottom) */
    "showAlertSmall": false, /* Voir la bannière réduite en bas à droite */
    "cookieslist": true, /* Voir la liste des cookies */

    "adblocker": false, /* Voir une alerte si un bloqueur de publicités est détecté */
    "AcceptAllCta": true, /* Voir le bouton accepter tout (quand highPrivacy est à true) */
    "highPrivacy": true, /* Désactiver le consentement automatique */
    "handleBrowserDNTRequest": false, /* Si la protection du suivi du navigateur est activée, tout interdire */

    "removeCredit": true, /* Retirer le lien vers bannierecookie.js */
    "moreInfoLink": true, /* Afficher le lien "voir plus d'infos" */
    "useExternalCss": false, /* Si false, bannierecookie.css sera chargé */

    //"cookieDomain": ".my-multisite-domaine.fr", /* Cookie multisite */

    "readmoreLink": "politiquecookies" /* Lien vers la page "Lire plus" */
});

bannierecookie.user.gtagUa = 'UA-686327-2';
bannierecookie.user.gtagMore = function () { /* add here your optionnal gtag() */ };
(bannierecookie.job = bannierecookie.job || []).push('gtag');

}

@Component({
  selector: 'app-bannierecookie',
  template: `
    
  `,
})
export class BannierecookieComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    showCookie();
  }

}
