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
        <title>Mentions Légales</title>
        
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
                        <span class="lead__mascarin">Mentions légales</span>
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
                        <h2 class="wow fadeInLeftBig">Éditeur du site</h2>
                        <div class="clearfix"></div>
                        <!--<h4> test </h4>-->
                        
                        <p text-align="justify">
                        Le site <a href="https://www.cbnm.org">www.cbnm.org</a> est édité par le Conservatoire Botanique National de Mascarin, dit CBN-CPIE Mascarin. Le Conservatoire Botanique National de Mascarin est une association à but non-lucratif de loi du 1er juillet 1901, labélisée Centre Permanent d'Initiatives pour l'Environnement, dont le siège social est situé au 2, rue du Père Georges, Colimaçons, 97436 Saint-Leu.                        </p>
                        <p text-align="justify">
                            Elle est agréée « Conservatoire Botanique National » par le Ministrère français de la Transition Écologique et Solidaire, pour mener des missions de connaissance, de conservation, de gestion des données, d’expertise et de sensibilisation sur les enjeux liés au maintien du Patrimoine Végétal. 
                        </p>
                        <p text-align="justify">
                            Notre Association est également labélisée « Centre Permanent d’Initiatives pour l’Environnement » (CPIE) 
                            par l’Union National des CPIE depuis 2000 afin de privilégier une approche territoriale de protection de la flore et des habitats.
                        </p>
                        <hr>
                        <p text-align="justify" >
                        <h4>Renseignements généraux :</h4>
                        </p>
                        <p text-align="justify" >
                        Numéro SIREN : 340671353
                        </p>
                        <p text-align="justify" >
                        Numéro SIRET : 34067135300035
                        </p>
                        <p text-align="justify" >
                        Numéro RNA : W9R4001713
                        </p>
                        <p text-align="justify" >
                        Numéro APE : Recherche-développement en autres sciences physiques et naturelles (7219Z)
                        </p>
                        <p text-align="justify" >
                        Numéro de téléphone : <a href="tel:+2620262242725">0262 24 27 25</a>
                        </p>
                        <p text-align="justify" >
                        Addresse de messagerie : <a href="mailto:cbnm@cbnm.org">cbnm@cbnm.org</a>
                        </p>
              

                        
                    </article>

                    <br>
                    <br>

                    <article>
                    <h2 class="wow fadeInLeftBig">Direction de la publication</h2>
                    <p text-align="justify">Le directeur de la publication est Monsieur Dominique OUDIN, en sa qualité de Directeur du CBN-CPIE Mascarin.</p>
                    </article>

                    <br>
                    <br>

                    <article>
                    <h2 class="wow fadeInLeftBig">Droit d’auteur</h2>
                    <p text-align="justify">
                        Ce site respecte le droit d’auteur. L'ensemble des contenus, pages, scripts, icônes ou sons de ce site sont la propriété exclusive du Conservatoire Botanique National de Mascarin (CBN-CPIE Mascarin).Toute production, reproduction ou représentation de ce site, en tout ou partie (textes, sons ou images), sur quelque support que ce soit est interdite. Le non-respect de cette interdiction constitue une contrefaçon pouvant engager la responsabilité civile et pénale du contrefacteur.
                    </p>
                    <p text-align="justify">
                    Il est strictement interdit d'utiliser ou de reproduire le nom "Conservatoire Botanique National de Mascarin" ou son logo, seuls ou associés, ainsi que les autres marques, modèles ou dessins enregistrés, qui sont la propriété du Conservatoire Botanique National de Mascarin (CBN-CPIE Mascarin), à quelque titre que ce soit et notamment à des fins publicitaires sans l'accord préalable écrit de Conservatoire Botanique National de Mascarin (CBN-CPIE Mascarin).                    </p>
                    </article>

                    <br>
                    <br>

                    <article>
                    <h2 class="wow fadeInLeftBig">Conditions d’utilisation</h2>
                    <p text-align="justify">
                    Les informations contenues dans ce site sont soumises à la loi française et sont fournies "telles quelles" sans garanties d'aucune sorte, ni explicites, ni tacites. Ces informations peuvent contenir des inexactitudes techniques ou des erreurs typographiques. Elles sont non contractuelles et sujettes à modification sans préavis.                    </p>
                    <p text-align="justify">
                    En utilisant ce site, le visiteur reconnaît avoir eu la possibilité de prendre connaissance de cet avertissement.                    </p>
                    <p text-align="justify">
                    Le Conservatoire  Botanique National de Mascarin (CBN-CPIE Mascarin) n'est pas responsable du contenu de tout autre site auquel vous pourriez avoir accès via le site CBNM ou ses sites annexes.                    </p>
                    <p text-align="justify">
                    Le Conservatoire  Botanique National de Mascarin (CBN-CPIE Mascarin) n’assure aucune garantie, expresse ou tacite, concernant tout ou partie de son site WEB. Le Conservatoire  Botanique National de Mascarin (CBN-CPIE Mascarin) a fait tous ses efforts pour s’assurer que les informations accessibles par l’intermédiaire de son site web sont exactes. Cependant, nous ne garantissons en aucune manière que ces informations soient exactes, complètes et à jour.                    </p>
                    <p text-align="justify">
                    Il est expressément entendu par l'utilisateur de ce site qu'en aucun cas Conservatoire  Botanique National de Mascarin (CBN-CPIE Mascarin) ne peut être tenu responsable des dommages quelconques, directs ou indirects, matériels ou immatériels ou spéciaux, résultant notamment de la consultation et / ou de l'utilisation de ce site WEB ou d'autres sites qui lui sont liés, comme des utilisations d'informations textuelles, sonores ou visuelles qui auraient pu y être recueillies et notamment de tout préjudice financier ou commercial, de pertes de programmes ou de données dans son système d'information ou autre.                    </p>
                    </article>

                    <br>
                    <br>

                    <article>
                    <h2 class="wow fadeInLeftBig">Hébergement</h2>
                    <p text-align="justify">
                    Le site <a href="https://www.cbnm.org">www.cbnm.org</a> est hébergé par la société OVH dont le siège social se situe 2 rue kellermann 59100 Roubaix.                    </p>
                    
                    <br>
                    <hr>
                    
                    <h5>Pour approfondir le sujet : <a href="politiquecookies.php">Politique cookies</a></h5>
                    </article>

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

