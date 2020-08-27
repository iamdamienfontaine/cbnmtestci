<?php
    /*
     *
     */
    session_start();

    function initialize_datas() {
        $datas['mail_name'] = $datas['mail_email'] = $datas['mail_subject'] = $datas['mail_content'] = '';
    }

    /** Affichage des messages
     *
     * @todo modifier parametre de session $_SESSION['mail']['status'], ...
     ****************************************************** */
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


<!DOCTYPE html>
<html lang="fr" xmlns:og="http://ogp.me/ns#">
    <head>
        <!-- Base
        ================================================== -->
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Nous rejoindre</title>

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
        <link href="css/nous-rejoindre.css" rel="stylesheet">

        <!-- Google fonts 
        <link href='http://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css'>
        <link href='http://fonts.googleapis.com/css?family=Varela' rel='stylesheet' type='text/css'>
        <link href='http://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet' type='text/css'>
        -->
        <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
        <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
        <!--[if lt IE 9]>
          <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
          <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
        <![endif]-->

    </head>

    <body>

    <!--=========== START HEADER SECTION ================-->
    <header id="header">

        <!-- START MENU -->
        <div class="menu_area">
            <nav class="navbar navbar-default navbar-fixed-top" role="navigation">
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
                        <!-- IMG BASED LOGO  -->
                        <img class="logo-brand" src="img/logos/GENERAL.png"/>
                        <img class="logo-brand" src="img/logos/CPIE.png"/>
                        <!-- TEXT BASED LOGO -->
                        <a class="navbar-brand visible-lg" href="#">CBN-CPIE Mascarin</a>

                    </div>

                    <div id="navbar" class="navbar-collapse collapse">
                        <ul id="top-menu" class="nav navbar-nav main_nav">
                            <li><a href="index.php#accueil">Accueil</a></li>
                            <li><a href="index.php#presentation">Présentation</a></li>
                            <li><a href="index.php#missions">Missions</a></li>
                            <li><a href="index.php#ressources">Ressources</a></li>
                            <li><a href="index.php#contact">Contacts</a></li>
                            <li class="active"><a href="">Nous rejoindre</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
        <!-- END MENU -->

    </header>
    <!--=========== End HEADER SECTION ================-->



    <!--=========== START OFFRE de directeur général ================-->
    <section id="cbnm-recrute">
        <div class="container" >
            <div class="row">
                <div class="col-lg-12 col-md-12">
                    <article>
                        <h2 class="wow fadeInLeftBig">Le Conservatoire Botanique recrute:</h2>
                        <div class="about_content">
                            <div class="row">
                                <div class="col-sm-12">
                                    <div class="about_featured">
<!--<div class="panel-heading">
  <h3 class="panel-title">
    <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne">
      Un(e) Directeur / Directrice général(e) du CBNM
    </a>
  </h3>
</div>
<div id="collapseOne" class="panel-collapse collapse">
  <div class="panel-body">
    <ul>
		<li><b>Date de mise en ligne</b> : 15 février 2019</li>

		<li>
		  <b>Date limite de réponse</b> : 29 mars 2019
		</li>
    </ul>


    <a href="documents/Fiche_de_poste_ Direction_CBNM.pdf" class="read_more" target="_blank">
        Télécharger l'offre d'emploi au format PDF <i class="fa fa-download"></i>
    </a>


    <h3> Finalité de la mission </h3>
    <p>
        Sous l’autorité directe du président, et à partir des orientations arrêtées par le conseil d’administration,
        le directeur / la directrice du Conservatoire Botanique National de Mascarin assure la direction de
        l’établissement sur les aspects administratif, financier et scientifique.
    </p>


    <h3> Responsabilités </h3>
    <p>
        Le directeur/ la directrice assure la gestion courante, l’administration générale et scientifique du siège et
        des antennes du Conservatoire Botanique:
    </p>
    <ul>
        <li>
          L’exécution des décisions du Conseil d’administration et du Bureau
        </li>
        <li>
          La préparation chaque année du bilan d’activités et du bilan financier, du programme prévisionnel d’actions et du projet de budget pour l’année suivante
        </li>
        <li>
          Le pilotage budgétaire ainsi que le management RH
        </li>
        <li>
          La direction de tous les services du Conservatoire Botanique dans les limites financières définies par le budget annuel approuvé par le Conseil d’administration
        </li>
        <li>
          La tenue du Conseil scientifique
        </li>
        <li>
          La concertation avec les partenaires du Conservatoire et la recherche de nouveaux financements
        </li>
        <li>
          La coopération avec les autres Conservatoires et ceux du bassin Océan Indien
        </li>
    </ul>


    <h3> Missions opérationnelles </h3>
    <h4> Mission 1 Politique générale et relations avec les partenaires </h4>
    <p>
      Dans le cadre de l’agrément « conservatoire botanique National », et sous l’autorité du Président, le directeur / la directrice est responsable
      de la mise en œuvre de la politique du conservatoire et de la mise en place des partenariats avec les acteurs de l’environnement et de
      la biodiversité:
    </p>
    <ul>
        <li>
            Il / elle propose des projets stratégiques et prospectifs et évalue leurs conditions de
            faisabilité
        </li>
        <li>
            Il / elle assure la représentation administrative et technique du conservatoire botanique
            auprès des partenaires et interlocuteurs locaux, départementaux, régionaux, nationaux et
            internationaux
        </li>
        <li>
            Il / elle est responsable de l’ensemble des actions du conservatoire et veille à leur
            évaluation, en favorisant les échanges avec le réseau des conservatoires botaniques
            nationaux
        </li>
        <li>
            Il / elle est responsable de la communication et développe des outils (exposition, etc.)
        </li>
    </ul>

    <h4> Mission 2 Gestion administrative et financière de l’établissement </h4>
    <p>
        Sous l’autorité du Président, et avec l’appui éventuel du responsable administratif, il / elle
        gère l'ensemble des ressources (financières, humaines, techniques, moyens matériels...) du
        Conservatoire et veille à la bonne réalisation des actions et à leur évaluation:
    </p>
    <ul>
        <li>
          il / elle encadre l’ensemble du personnel et est responsable de l’organisation des services
          et de leur évolution (organigramme, tableau des effectifs, formations, évaluation, entretien professionnel)
        </li>
        <li>
          il /elle est responsable de la préparation des documents budgétaires et s’assure de la
          cohérence, de la légalité et de la bonne exécution du budget
        </li>
        <li>il /elle contribue à l'animation des instances délibératives et des instances de concertation</li>
    </ul>

    <h4>
        Mission 3 Activités scientifiques et techniques
    </h4>
    <ul>
        <li>
          il / elle est responsable de l’activité scientifique du conservatoire et coordonne l’ensemble
          des services sur les questions de biologie de la conservation, des problématiques « Flore et
          Habitats », et sur les outils techniques de ses activités (laboratoires, bases de données,
          méthodologies, fonds documentaire, etc.)
        </li>
        <li>
          il / elle intervient avec ses équipes et peut organiser des colloques, séminaires ainsi que développer les actions de formation ou de communication
          scientifiques (articles, publications, etc.)
        </li>
        <li>
          il /elle prépare tous les 5 ans le dossier de renouvellement de l’agrément
        </li>
        <li>
          il / elle participe à la formation du personnel
        </li>
        <li>
          il s’assure de la tenue du Conseil Scientifique et des expertises nécessaires ; anime les autres instances de concertation avec les partenaires
        </li>
    </ul>


    <h3> FORMATION REQUISE </h3>
    <p>
        Formation supérieure bac + 5 minium avec expérience réussie dans une
        fonction de direction.
    </p>


    <h3> QUALIFICATIONS REQUISES </h3>
    <h4>Au niveau général :</h4>
    <ul>
        <li>Expériences en management et direction
        </li>
        <li>Fortes capacités d’adaptation aux évolutions
        </li>
        <li>Fortes capacités d’analyse et d’anticipation
        </li>
        <li>Aptitudes à la conception, la gestion et l’évaluation de projets et de budgets
        </li>
        <li>Importantes capacités à diriger, motiver et former des équipes pluridisciplinaires
        </li>
        <li>Excellentes capacités rédactionnelles et esprit de synthèse
        </li>
        <li>Bonnes connaissances des règles de fonctionnement des institutions, associations et collectivités
        </li>
        <li>Fortes capacités de négociation avec les partenaires institutionnels
        </li>
        <li>Fortes capacités dans la mobilisation des sources de financement
        </li>
        <li>Bonnes connaissances des fonds européens
        </li>
        <li>Bonnes connaissances des procédures administratives afférentes aux conventions et marchés publics
        </li>
        <li>Compréhension des données essentielles de gestion : compte de trésorerie, résultats, bilan
        </li>
        <li>Expériences en communication et animation de réunions
        </li>
    </ul>

    <h4>Au niveau scientifique</h4>
    <ul>
        <li>Connaissances des enjeux et de la stratégie mise en œuvre en matière de biodiversité à la Réunion</li>
        <li>Bonnes connaissances du patrimoine végétal Réunionnais</li>
    </ul>


    <h3>Candidature</h3>
    <p>
       Pour répondre aux différentes offres d'emploi, merci d'adresser votre candidature à
       <dl>
         <dd>Monsieur le Président du CBNM</dd>
         <dd>2 rue du Père Georges, Colimaçons</dd>
         <dd>97436 SAINT LEU</dd>
       </dl>
       ou par mail à l’adresse suivante : <strong>recrutement@cbnm.org</strong> en précisant l’intitulé du poste.
     </p>

     <p>
       Votre candidature devra comporter les pièces suivantes:
     </p>
     
     <ul>
       <li>Lettre de motivation avec l’indication de vos prétentions salariales</li>
       <li>CV</li>
       <li>Mémoire technique précisant votre vision de la direction et du management du Conservatoire</li>
     </ul>

     <p>
       <b>Date limite de réponse</b> : 29 mars 2019
     </p>
  </div>

</div>-->

                                    </div>
                                </div>
                            </div>
                        </div>
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
      <!-- Javascript Files ================================================== -->

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
