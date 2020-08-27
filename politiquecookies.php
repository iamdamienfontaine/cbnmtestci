<?php
    /*
     * Traitement de la session en PHP
     */
    session_start();

    function initialize_datas() {
        $datas['mail_name'] = '';
        $datas['mail_email'] = ''; 
        $datas['mail_subject'] = '';
        $datas['mail_content'] = '';
    }

    $status = !empty($_SESSION['status']) ? $_SESSION['status'] : NULL;
    $message = "";

    if ( $status === 1 ) {
        $message = '<div class="alert alert-success" role="alert">'. $_SESSION['message'] .'</div>';
        initialize_datas();
    }
    else if ( $status === 0) {
        $message = '<div class="alert alert-danger" role="alert">';
        $message .= '<ul>';
        foreach( $_SESSION['errors'] as $error) {
            $message .= '<li>'. $error .'</li>';
        }
        $message .= '</ul>';
        $message .= '</div>';

        $datas = $_SESSION['datas'];
    }
    else {
        initialize_datas();
    }
    unset($_SESSION['status']);
    unset($_SESSION['errors']);
    unset($_SESSION['message']);
?>

<!-- Début du code html de la page -->

<!DOCTYPE html>
<html lang="fr">
    <head>
        
        <!-- Base
        ================================================== -->
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Politique de cookies</title>
        
        <meta name="description" content="Présentation du Conservatoire Botanique National de Mascarin (CBN-CPIE Mascarin) et de ses différentes activités">
        
        <meta property="og:title" content="Conservatoire Botanique National - Centre permanent d’initiatives pour l'environnement CBN-CPIE Mascarin" />
        <meta property="og:url" content="http://www.cbnm.org" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="http://www.cbnm.org/img/template_thumbnail-1.jpg" />
        <meta property="og:description" content="Présentation du Conservatoire Botanique National de Mascarin (CBN-CPIE Mascarin) et de ses différentes activités">
        <meta property="og:locale" content="fr-FR" />
        <meta property="og:site_name" content="CBN-CPIE Mascarin" />
        
        <!-- Mobile 
        ================================================== -->
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <!-- Favicon 
        ================================================== -->
        <link rel="shortcut icon" type="image/ico" href="favicon.ico"/>

        <!-- CSS
        ================================================== -->       
        
        <!-- Bootstrap css file-->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

        
        <!-- Font awesome css file-->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.5.0/css/font-awesome.min.css" integrity="sha512-+L4yy6FRcDGbXJ9mPG8MT/3UCDzwR9gPeyFNMCtInsol++5m3bk2bXWKdZjvybmohrAsn3Ua5x8gfLnbE1YkOg==" crossorigin="anonymous" />
        
        <!-- smooth animate css file -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.0/animate.min.css" integrity="sha512-po2xnZPzt6Ar3v0kb2gt/SKwcyCtyxHKZcCG1QIAl+wVPG7CTha5GfQ5efkOh6Xq0tCki+j8RogU5MuL9UpIiQ==" crossorigin="anonymous" />
                
        <!-- Default Theme css file -->
        <link id="orginal" href="css/themes/eucalyptus-theme.css" rel="stylesheet">
        
        <!-- Main structure css file -->
        <link href="css/style.css" rel="stylesheet">
   
    </head>
    
    <body> 
     
    <!--=========== START HEADER SECTION ================-->
    <span id="accueil"></span>
    <header id="header">
      
        <!-- START MENU -->
        <div class="menu_area">
            <nav class="navbar navbar-default navbar-fixed-top"> 
                <div class="container">
                    <div class="navbar-header">
                        
                        <!-- FOR MOBILE VIEW COLLAPSED BUTTON -->
                        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>

                        <!-- LOGO -->

                        <img class="logo-brand" alt="logo CBNM général" src="img/logos/GENERAL.png"/>
                        <img class="logo-brand" alt="logo CPIE" src="img/logos/CPIE.png"/>
                        <!-- TEXT BASED LOGO -->
                        <a class="navbar-brand visible-lg" href="#">CBN-CPIE Mascarin</a>
                        
                    </div>
                    
                    <div id="navbar" class="navbar-collapse collapse">
                        <ul id="top-menu" class="nav navbar-nav main_nav">
                            <li class="active"><a href="index.php#accueil">Accueil</a></li>
                            <li><a href="index.php#presentation">Présentation</a></li>
                            <li><a href="index.php#missions">Missions</a></li>    
                            <li><a href="index.php#ressources">Ressources</a></li>    
                            <li><a href="index.php#contact">Contacts</a></li>         
                            <li><a href="nous-rejoindre.php">Nous rejoindre</a></li>                           
                        </ul>           
                    </div>
                </div>     
            </nav>  
        </div>
        <!-- END MENU -->
        
        <!-- START HEAD AREA-->
        <div id="head1">
            <div class="container">
                <div class="row">
                    <h1 class="lead">
                        <span class="lead__mascarin">Notre politique de cookies</span>
                    </h1>
                </div>
            </div>
	    </div>
        <!-- END HEAD AREA -->

        
        
        
    </header>
    <!--=========== End HEADER SECTION ================--> 

    
    <div class="container" >
        
        <!--=========== START MESSAGE SECTION ================-->
        <section id="message">
        <!--<div class="container" >-->
            <div class="row">
                <div class="col-lg-12 col-md-12">
                    <?php echo $message; ?>
                </div>
            </div>
        <!--</div>-->
        </section>
        <!--=========== END MESSAGE SECTION ================-->
    </div>

                        
    <!--=========== START PRESENTATION ================-->
    <section id="presentation">
        <div class="container" >
        
            <div class="row">
                <div class="col-lg-12 col-md-12">
                    <article>
                        <h2 class="wow fadeInLeftBig">Qu’est-ce qu’un cookie ?</h2>
                        <div class="clearfix"></div>
                        <!--<h4> test </h4>-->
                        
                        <p text-align="justify">
                        Un cookie est un petit fichier texte et recouvre tout type de traceurs « déposés et lus par exemple lors de la consultation d'un site internet, de la lecture d'un courrier électronique, de l'installation ou de l'utilisation d'un logiciel ou d'une application mobile et ce, quel que soit le type de terminal utilisé ». Il peut être déposé par le serveur du Site visité ou par un serveur tiers (régie publicitaire, service de web analytique, etc.). Les cookies ne compromettent pas la sécurité du site.                        
                         </p>
                        
                    </article>

                    <br>
                    <br>

                    <article>
                    <h2 class="wow fadeInLeftBig">Les cookies déposés par CBN-CPIE Mascarin</h2>
                    <p text-align="justify">
                    Lorsque vous vous connectez sur notre Site, nous sommes susceptibles d’installer divers cookies sur votre terminal.                    
                    </p>
                    <p text-align="justify">
                    Les cookies que nous émettons nous permettent :
                    </p>
                    <ul style="list-style-type:'-    ';">
                        <li>De maintenir le bon fonctionnement du Site</li>
                        <li>De gérer l’acceptation et la durée de conservation des cookies</li>
                        <li>De pouvoir mesurer l’audience de notre Site</li>
                    </ul>
                    <br>
                    <p text-align="justify">
                    Conformément à la réglementation, les cookies ont une durée de vie maximum de 13 mois.
                    </p>

                    </article>

                    <br>
                    <br>

                    <article>
                    <h2 class="wow fadeInLeftBig">Les cookies émis par l’intermédiaire de tiers</h2>
                    
                    <p text-align="justify" >
                        <h4>Les cookies analytics :</h4>
                    </p>

                    <p text-align="justify">
                    Ils nous permettent de suivre les audiences de notre Site et de connaître votre navigation sur notre Site (cookies Google Analytics) et de générer des données statistiques quant aux utilisations du Site. Cela nous permet d’améliorer la performance du Site.                    
                    </p>
                    </article>

                    <br>
                    <br>

                    <article>
                    <h2 class="wow fadeInLeftBig">Gestion des cookies</h2>
                    
                    <table class="table table-striped">
                        <tr>
                            <th>Noms</th>
                            <th>Finalité</th>
                            <th>Durée de conservation</th>
                            <th>Destinataire</th>
                            <th>Statut d’accord</th>
                        </tr>
                        <tr>
                            <td>Google Analytics _gid</td>
                            <td>Analyse du trafic du site internet pour Google.</td>
                            <td>décidé par Google <a href="https://developers.google.com/analytics/devguides/collection/gajs/cookie-usage">En savoir plus</a></td>
                            <td>Google Inc.</td>
                            <td><a href="#" onclick="bannierecookie.userInterface.openPanel();">Gestion des cookies</a></td>
                        </tr>
                        <tr>
                            <td>Google Analytics _gat</td>
                            <td>Analyse du trafic du site internet pour Google.</td>
                            <td>décidé par Google <a href="https://developers.google.com/analytics/devguides/collection/gajs/cookie-usage">En savoir plus</a></td>
                            <td>Google Inc.</td>
                            <td><a href="#" onclick="bannierecookie.userInterface.openPanel();">Gestion des cookies</a></td>
                        </tr>
                        <tr>
                            <td>Google Analytics _gat_gtag_UA_*</td>
                            <td>Analyse du trafic du site internet pour Google.</td>
                            <td>décidé par Google <a href="https://developers.google.com/analytics/devguides/collection/gajs/cookie-usage">En savoir plus</a></td>
                            <td>Google Inc.</td>
                            <td><a href="#" onclick="bannierecookie.userInterface.openPanel();">Gestion des cookies</a></td>
                        </tr>
                        <tr>
                            <td>cbnm.org PHPSESSID</td>
                            <td>Permet de gérer la session d’un internaute sur son navigateur.</td>
                            <td>Durée de la session : 24 minutes</td>
                            <td>CBN-CPIE Mascarin</td>
                            <td>Aucune procédure de refus n’est disponible</td>
                        </tr>
                        <tr>
                            <td>cbnm.org bannierecookie_mascarin</td>
                            <td>Gestionnaire de consentement des cookies</td>
                            <td>Durée de 13 mois</td>
                            <td>CBN-CPIE Mascarin</td>
                            <td>Aucune procédure de refus n’est disponible</td>
                        </tr>
                    </table>

                    <br>
                    
                    <p text-align="justify">
                    Lorsque vous visitez notre Site pour la première fois, une bandeau cookies s’affiche vous indiquant les finalités des cookies. Sachez que la poursuite de la navigation sur le Site équivaut à donner votre consentement à l’utilisation des cookies par CBN-CPIE Mascarin.
                    Vous pouvez choisir à tout moment d’adapter la gestion des cookies en fonction de vos préférences, de les désactiver ou exprimer un choix différent via les moyens décrits ci-dessous.                    <p text-align="justify">
                    En utilisant ce site, le visiteur reconnaît avoir eu la possibilité de prendre connaissance de cet avertissement.                    
                    </p>

                    <br>

                    <h4 text-align="justify">
                    Une autre solution pour la gestion des Cookies et de vos choix, chaque navigateur propose une configuration différente : 
                    </h4>
                    
                    <br>

                    <div>
                        <h3 class="panel-title">
                            <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne">
                            Sur Chrome
                            </a>
                        </h3>
                    </div>
                    <div id="collapseOne" class="panel-collapse collapse">
                        <div class="panel-body">
                            <ol>
                                <li>
                                <b>Dans l'angle supérieur droit, cliquez sur « Plus » puis « Paramètres ».</b>
                                </li>

                                <li>
                                <b>En bas, cliquez sur « Paramètres avancés ».</b>
                                </li>

                                <li>
                                <b>Dans la section « Confidentialité et sécurité », cliquez sur « Paramètres du contenu ».</b>
                                </li>

                                <li>
                                <b>Cliquez sur « Cookies ».</b>
                                </li>

                                <li>
                                <b>Choisissez vos préférences</b>
                                </li>
                            </ol>
                            <a href="https://support.google.com/chrome/answer/95647?hl=fr&amp;hlrm=en"><p text-align="justify">Lien pour en savoir plus.</p></a>
                        </div>
                    </div>

                    <br>

                    <div>
                        <h3 class="panel-title">
                            <a data-toggle="collapse" data-parent="#accordion" href="#collapseTwo">
                            Sur Microsoft Edge (Internet Explorer)
                            </a>
                        </h3>
                    </div>
                    <div id="collapseTwo" class="panel-collapse collapse">
                        <div class="panel-body">
                            <ol>
                                <h3><b>Microsoft Edge :</b></h3>
                                <li>
                                <b> Dans la fenêtre de votre navigateur Microsoft Edge, cliquez sur le menu (3 petits points à l'horizontal) situé en haut à droite du navigateur.</b>
                                </li>
                                <li>
                                <b>Cliquez sur Paramères, en bas du menu.</b>
                                </li>
                                <li>
                                <b>Dans ce nouvel onglet, sélectionnez Afficher les paramètres avancés.</b>
                                </li>
                                <li>
                                <b>Une fois dans l'onglet Paramètres avancés, cliquez sur le champ intitulé "Cookies" et choisissez "Ne pas bloquer les cookies".</b>
                                </li>
                                <li>
                                <b>Vous pouvez fermer ce menu, les cookies sont désormais activés sur Microsoft Edge.</b>
                                </li>
                            </ol>
                            <br>
                            <br>
                            <br>
                            <ol>
                                <h3><b>Pour Internet Explorer 10 et 11 :</b></h3>
                                <li>
                                <b>Sélectionnez le bouton « Outils », puis « Options Internet ».</b>
                                </li>
                                <li>
                                <b>Sélectionnez l’onglet « Confidentialité », puis dans « Paramètres », sélectionnez « Avancé ». Choisissez si vous souhaitez autoriser, bloquer ou être invité à déterminer la configuration des cookies internes et des cookies tiers.</b>
                                </li>
                            </ol>
                            <br>
                            <br>
                            <br>
                            <ol>
                                <h3><b>Internet Explorer 8 :</b></h3>
                                <li>
                                <b>Sélectionnez le bouton « Outils », puis « Options Internet ».</b>
                                </li>
                                <li>
                                <b>Sélectionnez l’onglet « Confidentialité », puis dans « Paramètres », déplacez le curseur vers le haut pour bloquer tous les cookies ou vers le bas pour autoriser tous les cookies, puis cliquez sur « OK ».</b>
                                </li>
                            </ol>


                            <a href="https://support.microsoft.com/fr-fr/help/17442/windows-internet-explorer-delete-manage-cookies"><p text-align="justify">Lien pour en savoir plus.</p></a>
                        </div>
                    </div>

                    <br>

                    <div>
                        <h3 class="panel-title">
                            <a data-toggle="collapse" data-parent="#accordion" href="#collapseThree">
                            Sur Firefox
                            </a>
                        </h3>
                    </div>
                    <div id="collapseThree" class="panel-collapse collapse">
                        <div class="panel-body">
                            <ol>
                                <li>
                                <b>Cliquez sur le bouton de « Menu » et sélectionnez « Options »</b>
                                </li>

                                <li>
                                <b>Sélectionnez le panneau « Vie privée et sécurité » et rendez-vous à la section « Historique ».</b>
                                </li>

                                <li>
                                <b>Exercez vos choix en matière de Cookies ».</b>
                                </li>
                            </ol>
                            <a href="https://support.mozilla.org/fr/kb/activer-desactiver-cookies?redirectlocale=fr&amp;redirectslug=Activer%2Bet%2Bd%C3%A9sactiver%2Bles%2Bcookies"><p text-align="justify">Lien pour en savoir plus.</p></a>
                        </div>
                    </div>

                    <br>

                    <div>
                        <h3 class="panel-title">
                            <a data-toggle="collapse" data-parent="#accordion" href="#collapseFour">
                            Sur Safari
                            </a>
                        </h3>
                    </div>
                    <div id="collapseFour" class="panel-collapse collapse">
                        <div class="panel-body">
                            <ol>
                                <li>
                                <b>Choisissez Safari > Préférences, cliquez sur Confidentialité, puis sélectionnez une option relative aux « Cookies et données de site web »</b>
                                </li>
                            </ol>
                            <a href="https://support.apple.com/fr-fr/guide/safari/sfri11471/mac"><p text-align="justify">Lien pour en savoir plus.</p></a>
                        </div>
                    </div>

                    <br>

                    <div>
                        <h3 class="panel-title">
                            <a data-toggle="collapse" data-parent="#accordion" href="#collapseFive">
                            Sur Opera
                            </a>
                        </h3>
                    </div>
                    <div id="collapseFive" class="panel-collapse collapse">
                        <div class="panel-body">
                            <ol>
                                <li>
                                <b>Cliquez sur « Préférence », puis sur « Avancé » puis sur « Cookies »</b>
                                </li>

                                <li>
                                <b>Pour gérer les cookies en fonction d’un site en particulier, cliquez sur « gérer les cookies » </b>
                                </li>

                                <li>
                                <b>Si vous voulez accepter ou rejeter tous les cookies du même domaine, sélectionnez "Se souvenir de mon choix pour tous les cookies de ce domaine". La prochaine fois qu'un cookie est proposé pour ce domaine, le dialogue de cookie ne va pas apparaître.</b>
                                </li>

                                <li>
                                <b>Pour changer l'expiration du cookie à la fin d'une session, sélectionnez "Forcer la suppression en quittant Opera"</b>
                                </li>

                                <li>
                                <b>Les détails du cookie sont disponibles sous l'en-tête "Détails du cookie".</b>
                                </li>
                            </ol>
                            <a href="https://blogs.opera.com/news/2015/08/how-to-manage-cookies-in-opera/"><p text-align="justify">Lien pour en savoir plus.</p></a>
                        </div>
                    </div>

                    


                    </article>


                    <br>
                    <br>

                    <article>
                    <h2 class="wow fadeInLeftBig">Vos droits</h2>
                    
                    <p text-align="justify">
                    <b>
                    Dans l’objectif de vous permettre de contrôler nos usages de vos données personnelles, vous bénéficiez des droits suivants :
                    </b>
                    </p>

                    <ul style="list-style-type:'-    ';">
                        <li>
                        droit de vous opposer à nos traitements de vos données personnelles ;                        
                        </li>
                        <li>
                        droit d’accéder à vos données personnelles que nous traitons ;                        
                        </li>
                        <li>
                        droit de les rectifier ;                        
                        </li>
                        <li>
                        droit à l’effacement ;                        
                        </li>
                        <li>
                        droit à la portabilité de vos données ;                        
                        </li>
                        <li>
                        droit à la limitation du traitement ;                        
                        </li>
                        <li>
                        droit de définir des directives relatives à la conservation, l’effacement et la communication de vos données personnelles après votre mort.                        
                        </li>
                    </ul>

                    <br>
                    <br>

                    <p text-align="justify">
                    Conformément à la loi informatique et libertés du 6 janvier 1978 modifiée, et au RGPD, vous disposez d’un droit d’accès, de rectification, d’opposition, de suppression et de limitation pour les informations issues des cookies et autres traceurs. Pour cela, merci de vous adresser à <a href="mailto:dpo@cbnm.org">dpo@cbnm.org</a> .
                    </p>

                    </article>
                    <br>
                    <hr>
                    
                    <h5>Pour approfondir le sujet : <a href="politiquedeconfidentialite.php">Politique de confidentialité</a></h5>
 
                </div>
            </div> 
        </div> 
    </section>
    <!--=========== END PRESENTATION ================--> 
    
    

     <!--=========== BEGAIN FOOTER ================-->
     <footer id="footer">
       <div class="container">
         <div class="row">
           <div class="col-lg-6 col-md-6 col-sm-6">
             <div class="footer_left">

                <p><strong><?php echo '&copy;'. date('Y') . ' Conservatoire Botanique National de Mascarin'; ?></strong></p>
                
                <a href="mentionslegales.php">Mentions légales </a>
                <br>
                <a href="politiquecookies.php">Politique de cookies </a>
                <br>
                <a href="politiquedeconfidentialite.php">Politique de confidentialité </a>
                <br>
                <a href="#" onclick="bannierecookie.userInterface.openPanel();">Gestion de cookies</a>

             </div>
           </div>
           <div class="col-lg-6 col-md-6 col-sm-6">
             <div class="footer_right" style="text-align: right">
                <img style="margin-left: 7px" alt="Logo Mascarin Réunion" src="img/logos/RUN.png"/>
                <img style="margin-left: 7px" alt="Logo Mascarin Mayotte" src="img/logos/MAYOTTE.png"/>
                <img style="margin-left: 7px" alt="Logo Mascarin Iles Eparses" src="img/logos/IE.png"/>
             </div>
           </div>
         </div>
       </div>
      </footer>
      <!--=========== END FOOTER ================-->

     <!-- Javascript Files
     ================================================== -->
     <script src="bannierecookie/bannierecookie.js"></script>

    <script>
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

            "readmoreLink": "politiquecookies.html" /* Lien vers la page "Lire plus" */
        });
        
        bannierecookie.user.gtagUa = 'UA-686327-2';
        bannierecookie.user.gtagMore = function () { /* add here your optionnal gtag() */ };
        (bannierecookie.job = bannierecookie.job || []).push('gtag');
    </script>
  
     <!-- initialize jQuery Library -->
     <script src="js/jquery.min.js"></script>    

    <!-- Google map -->
    
    <!-- Stellar -->
    <script src="js/jquery.stellar.min.js"></script>
    
     <!-- For smooth animation  -->
     <script src="https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js" integrity="sha512-Eak/29OTpb36LLo2r47IpVzPBLXnAMPAVypbSZiZ4Qkf8p/7S/XRG5xp7OKWPPYfJT6metI+IORkR5G8F900+g==" crossorigin="anonymous"></script>
     
    <!-- Bootstrap js -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
    
    <!-- Custom js-->
    <script src="js/cbnm.js"></script>

  </body>
</html>

