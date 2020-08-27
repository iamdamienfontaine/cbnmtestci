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
        <title>Politique de confidentialité</title>
        
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
                        <span class="lead__mascarin">Politique de confidentialité</span>
                    </h1>
                    <p text-align="justify">
                    L’ Association Conservatoire  Botanique National de Mascarin (CBN-CPIE Mascarin) en sa qualité de Responsable de traitement est particulièrement attentive à la protection et au respect de votre vie privée. La présente politique de confidentialité a vocation à vous présenter la manière dont nous collectons, utilisons et partageons vos Données à caractère personnel et ce conformément à la Réglementation. Nous vous invitons à lire attentivement le présent document pour connaître et comprendre nos pratiques quant aux traitements de vos Données personnelles.                    
                    </p>

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
                        <h2 class="wow fadeInLeftBig">1- Définitions</h2>
                        <div class="clearfix"></div>
                        <!--<h4> test </h4>-->
                        
                        <p text-align="justify">
                        « Anonymisation » est définie comme « le résultat du traitement des données personnelles afin d’empêcher, de façon irréversible, toute identification » ;
                        </p>
<br>
                        <p text-align="justify">
                        « Collecter », s’entend du fait de recueillir des données à caractère personnel. Cette collecte peut s’effectuer, notamment, à l’aide de questionnaires ou de formulaires en ligne ;                        </p>
<br>
                        <p text-align="justify">
                        « Consentement », votre consentement s’entend de toute manifestation de volonté, libre, spécifique, éclairée et univoque par laquelle vous acceptez, par une déclaration ou par un acte positif clair, que des données à caractère personnel vous concernant fassent l'objet d'un traitement ;                        </p>
<br>
                        <p text-align="justify">
                        « Données à caractère personnel » ou « Données » désigne toute information se rapportant à une personne physique identifiée ou identifiable. Est réputée être une « personne physique identifiable » une personne physique qui peut être identifiée, directement ou indirectement, notamment par référence à un identifiant, tel qu'un nom, un numéro d'identification, des Données de localisation, un identifiant en ligne, ou à un ou plusieurs éléments spécifiques propres à son identité physique, physiologique, génétique, psychique, économique, culturelle ou sociale ;                        </p>
<br>
                        <p text-align="justify">
                        « Droits protégeant vos données personnelles » :   désigne  l’ensemble  des   droits fondamentaux tels que décrit dans la réglementation européenne, portant sur :                        </p>
<br>
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

                        <cite><i>RÈGLEMENT (UE) 2016/679 DU PARLEMENT EUROPÉEN ET DU CONSEIL du 27 avril 2016, art. 15 à 21 et art. 23</i></cite>

                        <br>
                        <br>
                        <br>

                        <p text-align="justify">
                        « Limitation  de  traitement »  s’entend  du  marquage  de  données  à  caractère  personnel conservées, en vue de limiter leur traitement futur ;
                        </p>
                        <cite><i>Règl. UE 2016-679 du 27-4-2016, art. 4</i></cite>

                        <br>
                        <br>

                        <p text-align="justify">
                        « Minimisation » associé à celui de « données » évoque une limitation apportée à la collecte ou à l’utilisation d’informations ;                        </p>
<br>
                        <p text-align="justify">
                        « Mutualisation des données » s’entend du résultat de la mise en commun de bases de données clients ou prospects de plusieurs partenaires ;                        </p>
                        <br>
                        <p text-align="justify">
                        « Profilage » s’entend comme « toute forme de traitement automatisé de données à caractère personnel consistant à utiliser ces données à caractère personnel pour évaluer certains aspects personnels relatifs à une personne physique, notamment pour analyser ou prédire des éléments concernant le rendement au travail, la situation économique, la santé, les préférences personnelles, les intérêts, la fiabilité, le comportement, la localisation ou les déplacements de cette personne physique » ;
                        </p>
                        <cite><i>Règl. (UE) 2016/679 du 27-4-2016 : JOUE 2016 L 119 p.1, art. 4 §4.</i></cite>
<br>
<br>
                        <p text-align="justify">
                        « Données sensibles » désigne les Données qui révèlent l'origine raciale ou ethnique, les opinions politiques, les convictions religieuses ou philosophiques ou l'appartenance syndicale, ainsi que le traitement des Données génétiques, des Données biométriques aux fins d'identifier une personne physique de manière unique, des Données concernant la santé ou des Données concernant la vie sexuelle ou l'orientation sexuelle d'une personne physique. L’Association ne traite aucune donnée sensible;                        </p>
<br>
                        <p text-align="justify">
                        « Responsable du traitement » désigne la personne physique ou morale, l'autorité publique, le service ou un autre organisme qui, seul ou conjointement avec d'autres, détermine les finalités et les moyens du traitement. En l’espèce il s’agit du Conservatoire  Botanique National de Mascarin (CBN-CPIE Mascarin);                        </p>
<br>
                        <p text-align="justify">
                        « Règlementation » désigne le Règlement n° 2016/679 du Parlement européen et du Conseil du 27 avril 2016 relatif à la protection des personnes physiques à l’égard du traitement des Données à caractère personnel et à la libre circulation des Données (RGPD) et la Loi informatique et liberté n°78-17 du 6 janvier 1978 modifiée.                        </p>
<br>
                        <p text-align="justify">
                        « Sites » désigne tous les sites internet édités par CBN-CPIE Mascarin.                        </p>
              

                        
                    </article>

                    <br>
                    <br>

                    <article>
                    <h2 class="wow fadeInLeftBig">2 - Les données que nous recueillons</h2>
                    
                    <p text-align="justify">
                        <b>
                        Par l’intermédiaire de nos Sites internet, nous sommes susceptibles de recueillir et de traiter les Données suivantes :                        </b>                    
                    </p>
                    
                    <ul style="list-style-type:'-    ';">
                    <li>Nom;</li>
                    <li>Adresse mail;</li>
                    <li>Sujet;</li>
                    <li>Message;</li>
                    </ul>
                    <br>
                    <p text-align="justify">
                    Ces Données nous permettons de vous contacter par email afin de répondre a vos question en lien avec le Conservatoire Botanique National et Centre Permanent d’Initiatives pour l’Environnement Mascarin.                   </p>
                    <br>
                    <p text-align="justify">
                    <b>Les Données que nous recueillons via les cookies et autre trackers :</b>
                    </p>
                    
                    <p text-align="justify">
                    Les Sites CBN-CPIE Mascarin utilisent des cookies installés sur votre ordinateur lors de votre navigation. Un cookie est un fichier de petite taille qui enregistre des informations relatives à la navigation sur un Site. Les données ainsi obtenues visent à faciliter la navigation ultérieure sur le Site, et ont également vocation à permettre diverses mesures de fréquentation. Pour en savoir plus sur la manière dont nous gérons les cookies et les modalités d’opposition, veuillez consulter notre Politique cookies.
                    </p>
                    <br>
                    <p text-align="justify">
                    CBN-CPIE Mascarin ne traite aucune Donnée sensible.
                    </p>

                    </article>

                    <br>
                    <br>

                    <article>
                    <h2 class="wow fadeInLeftBig">3 - Les durées de conservation</h2>
                    <p text-align="justify">
                    Vos données personnelles sont conservées  pour la durée nécessaire au traitement de votre demande d’information. Elles seront au maximum conservées durant 12 mois à partir du dernier contact puis supprimer.                    </p>
                    <p text-align="justify">
                    <b>Les Données de navigation des visiteurs seront conservées au maximum pendant 13 mois, pour en savoir plus dirigez vous vers <a href="politiquecookies.php">notre politique de cookies.</a></b>   
                    </p>
                    </article>

                    <br>
                    <br>

                    <article>
                    <h2 class="wow fadeInLeftBig">4 - Les finalités et bases légales sur lesquelles sont fondés nos traitements</h2>
                    <p text-align="justify">
                    Pour le formulaire de contact une réponse sera écrite afin de répondre au mail reçu par notre service administratif.                    </p>

                    </article>

                    <br>
                    <br>

                    <article>
                    <h2 class="wow fadeInLeftBig">5 - Les destinataires de vos Données</h2>
                    <p text-align="justify">
                    Les données rentrer dans le formulaire de contact seront transmises à notre service administratif en charge de la boîte mail <a href="mailto:cbnm@cbnm.org">cbnm@cbnm.org</a>.

                    </p>
                    </article>

                    <article>
                    <h2 class="wow fadeInLeftBig">6 - Transferts de Données</h2>
                    <p text-align="justify">
                    CBN-CPIE Mascarin ne transfère pas vos Données en dehors de l’Union européenne. Néanmoins, il est possible que ces dernières soient hébergées sur des serveurs situés en dehors de l’Union européenne.

                    </p>
                    <p text-align="justify">
                    Dans ce cas, CBN-CPIE Mascarin s’engage à prendre toutes les mesures nécessaires à la préservation de l’intégrité et de la sécurité de vos Données afin que ces dernières soient :                    </p>  
                    <br>
                    <ul style="list-style-type:'-    ';">

                    <li>situées dans un Etat considéré comme adéquat par la Commission européenne ;</li>
                    <li>envoyées à des entités présentant des garanties suffisantes quant à la protection des Données à caractère personnel par la mise en œuvre et la signature de clauses contractuelles types approuvées par la Commission européenne.</li>
                    
                    </ul>
                    <br>
                    <br>
                    </article>

                    <article>
                    <h2 class="wow fadeInLeftBig">7 - Sécurité des Traitements</h2>
                    <p text-align="justify">
                    CBN-CPIE Mascarin assure le traitement de vos Données en toute confidentialité et en toute sécurité en mettant en place les mesures techniques et organisationnelles nécessaires pour préserver dans des conditions optimales leur sécurité, leur confidentialité et leur intégrité.
                    </p>
                    <p text-align="justify">
                    Seules les personnes strictement habilitées par CBN-CPIE Mascarin auront accès à vos Données. Aucun tiers non autorisé ne saurait y avoir accès, hors obligation légale ou unioniste incombant au Responsable de traitement.
                    </p>
                    </article>

                    <article>
                    <h2 class="wow fadeInLeftBig">8 - Vos droits</h2>

                    <p text-align="justify">
                    En application de la loi Informatique et libertés et du RGPD, vous disposez à tout moment d'un droit d'accès, de modification, d’opposition à la prospection commerciale et en cas de motifs légitimes, du droit à la limitation du traitement de vos Données et du droit de demander la suppression des Données personnelles vous concernant. Vous disposez également du droit à la portabilité de vos Données, du droit de définir des directives concernant vos Données en cas de décès et du droit de retirer votre consentement. Vous pouvez exercer vos droits en écrivant à <a href="mailto:dpo@cbnm.org">dpo@cbm.org</a>. 
                    </p>


                    <p text-align="justify">
                    Si satisfaction ne vous était pas donnée concernant le traitement de vos Données ou l’exercice de vos droits, vous avez la possibilité de saisir la CNIL.                    </p>

                    </article>

                    <article>
                    <h2 class="wow fadeInLeftBig">9 - Mise à jour</h2>
                    
                    <p text-align="justify">
                        <b>
                        La présente politique pourra faire l’objet d’actualisation par CBN-CPIE Mascarin, en cas de nouveaux traitements, et notamment sur le fondement :
                        </b>
                    </p>
                    
                    <ul style="list-style-type:'-    ';">
                            <li>
                            des changements significatifs intervenus dans la législation et/ou la jurisprudence ainsi que les normes techniques applicables au Système d’Information ;                            
                            </li>
                            <li>
                            de l’évaluation des risques ;                            
                            </li>
                            <li>
                            des réajustements suggérés par la mise en œuvre des procédures internes de gestion de l’information.                            
                            </li>
                        </ul>

                    </article>
                    <br>
                    <hr>
                    
                    <h5>Pour approfondir le sujet : <a href="mentionslegales.php">Mentions légales</a></h5>
 
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

