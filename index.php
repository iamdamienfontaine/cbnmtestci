<?php
    /*
     * 
     */
    session_start();

    function initialize_datas() {
        $datas['mail_name'] = '';
        $datas['mail_email'] = ''; 
        $datas['mail_subject'] = '';
        $datas['mail_content'] = '';
    }

    /** Affichage des messages
     * 
     * @todo modifier parametre de session $_SESSION['mail']['status'], ...
     ****************************************************** 
    
    * Initialisation de la variable status (affichage d'erreur : Index Undefinied)
     */
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
<html lang="fr">
    <head>
        
        <!-- Base
        ================================================== -->
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>CBN-CPIE Mascarin</title>
        
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
        <link rel="shortcut icon" type="image/png" href="favicon.ico"/>

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
                        <!-- IMG BASED LOGO  -->
                        <img class="logo-brand" alt="logo CBNM général" src="img/logos/GENERAL.png"/>
                        <img class="logo-brand" alt="logo CPIE" src="img/logos/CPIE.png"/>
                        <!-- TEXT BASED LOGO -->
                        <a class="navbar-brand visible-lg" href="#">CBN-CPIE Mascarin</a>
                        
                    </div>
                    
                    <div id="navbar" class="navbar-collapse collapse">
                        <ul id="top-menu" class="nav navbar-nav main_nav">
                            <li class="active"><a href="#accueil">Accueil</a></li>
                            <li><a href="#presentation">Présentation</a></li>
                            <li><a href="#missions">Missions</a></li>    
                            <li><a href="#ressources">Ressources</a></li>    
                            <li><a href="#contact">Contacts</a></li>         
                            <li><a href="nous-rejoindre.php">Nous rejoindre</a></li>                           
                        </ul>           
                    </div>
                </div>     
            </nav>  
        </div>
        <!-- END MENU -->

        <!-- START HEAD AREA-->
        <div id="head" data-stellar-background-ratio="0.5">
            <div class="container">
                <div class="row">
                    <h1 class="lead">
                        <span>CONSERVATOIRE BOTANIQUE NATIONAL</span>
                        <span>CENTRE PERMANENT D’INITIATIVES POUR L’ENVIRONNEMENT</span>
                        <span class="lead__mascarin">MASCARIN</span>
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
                        <h2 class="wow fadeInLeftBig">Présentation</h2>
                        <div class="clearfix"></div>
                        <!--<h4> test </h4>-->
                        <img alt="Logo cbnm" src="img/logos/Logo_cbnm_100.jpg" >
                        <p>
                            Notre Association loi 1901 est créée en septembre 1986 sous l’impulsion de botanistes, dont l’éminent Thérésien CADET, 
                            et d’hommes politiques conscients de l’originalité et la richesse du Patrimoine Végétal réunionnais 
                            et des risques de disparition de ce-dernier.
                        </p>
                        <p>
                            Elle est agréée « Conservatoire Botanique National » par le Ministère de l’Écologie, du Développement 
                            Durable et de l’Énergie pour mener des missions de connaissance, de conservation, d’expertise et de sensibilisation sur les enjeux liés au maintien du Patrimoine Végétal. 
                        </p>
                        <p>
                            Cet agrément national a été délivré pour les territoires de La Réunion en 1993, puis à ceux de Mayotte 
                            et des îles Éparses en 2007.
                        </p>

                        <br/>
                        <img alt="logo cpie redim" src="img/logos/logo_cpie-redim.png">
                        <p>
                            Notre Association est également labélisée « Centre Permanent d’Initiatives pour l’Environnement » (CPIE) 
                            par l’Union National des CPIE depuis 2000 de manière à intensifier les approches territoriales intégrées en relation avec les grands enjeux de la flore et des habitats.
                        </p>
                        <div  class="clearfix"></div>
                        <p>
                            Sur l’ensemble des collectivités françaises d’Outre Mer, le CBN-CPIE Mascarin est la seule structure à 
                            détenir cet agrément et ce label.
                        </p>                

                        <!-- START ABOUT CONTENT -->
                        <div class="about_content">
                            <div class="row">
                                <div class="col-sm-12">
                                    <div class="about_featured">
                                        <div class="panel-heading">
                                            <h4 class="panel-title">
                                                <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne">
                                                   <span class="fa fa-exclamation-circle"></span>A propos
                                                </a>
                                            </h4>
                                        </div>
                                        <div id="collapseOne" class="panel-collapse collapse in">
                                            <div class="panel-body">
                                                <p>
                                                    Depuis juin 2014, l’association a vu ses activités se modifier et se répartir en 2 entités :
                                                </p>
                                                <p>
                                                    L’ association Conservatoire Botanique National - CPIE Mascarin s’est recentrée sur les missions scientifiques 
                                                    alors que toute l’activité liée à l’accueil des publics et à la gestion des collections a été reprise par 
                                                    le Conseil Départemental de La Réunion comme un service de la Direction de l’Environnement, 
                                                    sous l’intitulé <strong>Mascarin, Jardin Botanique de La Réunion</strong>.
                                                </p>
                                                <p>
                                                    Les 2 entités poursuivent le travail de cohérence et complémentarité de leurs actions sur le site bien connu de Colimaçons.
                                                </p>
                                                <p>
                                                    Pour suivre les actualités et visiter <strong>Mascarin, Jardin Botanique de La Réunion</strong>, veuillez suivre le lien suivant : 
                                                    <a href="http://www.cg974.fr/index.php/Mascarin-Jardin-Botanique-de-La-Reunion/" target="_blank" style="color: #337ab7">
                                                        Mascarin, Jardin botanique de la Réunion <span class="fa fa-external-link"></span>
                                                    </a>
                                                </p>
                                            </div>
                                        </div>
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
    
    <!--
    <div id="fb-root"></div>
    <div class="fb-page" data-href="https://www.facebook.com/CBNMascarin" data-tabs="timeline" data-width="200px" data-height="400px" data-show-faces="faces (true | false)" data-header="header (true | false)" data-stream="posts (false | true)" data-show-border="border (true | false)" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/facebook" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/facebook">Facebook</a></blockquote></div>
    -->
            
    <!--=========== START MISSIONS ================-->
    <section id="missions">
        <div class="container">
                
                <div class="row">
                    <div class="col-lg-12 col-md-12">
                        <!-- BEGAIN SERVICE HEADING -->
                        <article class="heading">
                            <h2 class="wow fadeInLeftBig">NOS MISSIONS, NOS VALEURS, NOS ENGAGEMENTS</h2>
                            <p>
                                Présentation des MISSIONS d’agrément CONSERVATOIRE BOTANIQUE NATIONAL 
                                et de label CENTRE PERMANENT D’INITIATIVES POUR L’ENVIRONNEMENT  du Conservatoire Botanique de Mascarin
                            </p>
                        </article>
                    </div>          
                </div>
            
                <div class="row missions_list">
                    <div class="col-lg-12 col-md-12">
                        <div class="row">
                            <div class="col-lg-6 col-md-6 col-sm-6">
                                <!-- BEGAIN SINGLE SERVICE -->
                                <div class="mission_item wow fadeInLeft">
                                    <div class="mission_iconarea">
                                        <span class="fa fa-search mission_icon"></span>
                                    </div>
                                    <h3 class="mission_title">CONNAITRE</h3>
                                    <p>
                                        La connaissance de la flore et des habitats constitue un domaine complexe 
                                        faisant appel à des champs d’expertise scientifique et technique très variés 
                                        tels que la botanique systématique, les inventaires de terrain, la géomatique, 
                                        la saisie et la bancarisation des données (de terrain, herbiers, alcoothèque, 
                                        carpothèque, banque en silicagel, iconographiques),  au sein de bases de données, 
                                        la mise à disposition des données sur le WEB et l’utilisation de l’ensemble de ces connaissances. 
                                    </p>
                                    <p>
                                        Consolider et actualiser ces connaissances permet
                                        de définir et mettre en œuvre des politiques 
                                        cohérentes et responsables en matière de gestion 
                                        durable de la flore, des habitats et de l'aménagement 
                                        du territoire.  
                                    <p>
                                        Pour conserver un patrimoine durablement, il faut apprendre à le connaître et à le reconnaître. 
                                    </p>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-6">
                                <!-- BEGAIN SINGLE SERVICE -->
                                <div class="mission_item wow fadeInRight">
                                    <div class="mission_iconarea">
                                        <span class="fa fa-pagelines mission_icon"></span>
                                    </div>
                                    <h3 class="mission_title">CONSERVER</h3>
                                    <p>
                                        La sauvegarde du patrimoine végétal endémique et indigène constitue un enjeu majeur pour un territoire.  
                                        Cette mission revêt un caractère d’autant plus crucial lorsque ce patrimoine est officiellement reconnu comme étant en danger 
                                        d’extinction. 
                                    </p>
                                    <p>
                                        Les objectifs de nos missions de conservation sont multiples : 
                                        évaluer et prioriser les enjeux de conservation à partir des données de connaissances, 
                                        définir et planifier des programme d'actions (Plan d’Urgence, Plan Directeur de Conservation, 
                                        Plan National d’Action) réaliser des récoltes de diaspores (semences, fruits, boutures, etc.), 
                                        assurer leur traçabilité, alimenter des banques de graines, 
                                        développer des itinéraires techniques optimisés de production et d’élevage, 
                                        produire des plants et les endurcir, 
                                        consolider les réseaux de collections conservatoires ex situ (arboretum), 
                                        transférer les plants vers les gestionnaires d’espaces naturels pour des opérations de réintroduction et/ou de renforcement 
                                        biologique de populations naturelles. 
                                    </p>
                                </div>
                            </div>

                            <div class="col-lg-6 col-md-6 col-sm-6">
                                <!-- BEGAIN SINGLE SERVICE -->
                                <div class="mission_item wow fadeInLeft">
                                    <div class="mission_iconarea">
                                        <span class="fa fa-graduation-cap mission_icon"></span>
                                    </div>
                                    <h3 class="mission_title">CONSEILLER</h3>
                                    <p>
                                        Appuyer l’État et les collectivités 
                                        territoriales à travers des expertises scientifiques et 
                                        techniques objectives et de qualité constitue une orientation majeure de nos activités. 
                                    </p>
                                    <p>
                                        Ainsi, ces missions d’expertise sont de nature très variée et concernent autant l’identification d’espèces, 
                                        en particulier protégées, des opérations de contre-expertise d’études, 
                                        l’analyse critique de dossiers stratégiques, l’appui à la définition de projets d’aménagement et d’occupation du sol, 
                                        d’optimisation des schémas régionaux de cohérence écologique, de mise en œuvre de la Trame Verte et Bleue, etc. 
                                    </p>
                                </div>
                            </div>                            

                            <div class="col-lg-6 col-md-6 col-sm-6">
                                <!-- BEGAIN SINGLE SERVICE -->
                                <div class="mission_item wow fadeInRight">
                                    <div class="mission_iconarea">
                                        <span class="fa fa-users mission_icon"></span>
                                    </div>
                                    <h3 class="mission_title">SENSIBILISER</h3>
                                    <p>
                                        Les enjeux de connaissance et de conservation du patrimoine végétal 
                                        indigènes ne peuvent être durablement abordés sans que les populations et 
                                        l’ensemble des publics de la société civile ne soient sensibilisés et informés. 
                                    </p>
                                    <p>
                                        Nous tâchons autant que possible de partager 
                                        l’ensemble des informations en lien avec la connaissance et 
                                        la conservation du patrimoine végétal menacé avec les différents 
                                        publics de nos territoires d’agrément CBN et de label CPIE à travers 
                                        des conférences, des expositions commentées, l’accueil de divers types de public, etc. 
                                    </p>
                                    <p>
                                        La conservation durable de nos patrimoines végétaux ne peut être envisagée sans l’engagement des populations. 
                                    </p>
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>
        </div>
    </section>
    <!--=========== END MISSIONS ================-->
    
    <!--=========== BEGAIN RESSOURCES SECTION ================-->
    <section id="ressources" data-stellar-background-ratio="0.5">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-md-12">

                  <!-- START RESSOURCES HEADING -->
                  <article>
                    <h2 class="wow fadeInLeftBig">Ressources</h2>
                    <p>Accédez aux diverses ressources du CBN-CPIE Mascarin :</p>
                  </article>
                </div>
            </div>
        </div>
    </section>
    <div class="container">
            <div class="row">
                <div class="col-lg-12 col-md-12 text-center">
                
                <h3 style="text-transform: uppercase;"><img src="img/logos/RUN.png" alt="Réunion">  Réunion</h3>
                </div>

                <!-- MASCARINE-REUNION -->
                <div class="col-lg-4 col-md-4 col-sm-4">

                
                <div class="single_post wow fadeInUp">
                <a href="http://mascarine.cbnm.org" class="read_more" target="_blank">
                          <h4>Mascarine Cadetiana</h4>                    
                          <p>
                              Pôle flore et habitat du SINP de La Réunion - diffusion et saisie de données géographiques sur la flore et 
                              les habitats de La Réunion (index taxonomique, répartition géographique de la flore, cartographie des habitats)
                          </p>
                          
                              Accéder au site &nbsp;<i class="fa fa-external-link">  </i>
                              </a>             
                      </div>
                </div>
                
                
                
                <div class="col-lg-4 col-md-4 col-sm-4">
                    <div class="single_post wow fadeInUp">      
                    <a href="http://mascarine.cbnm.org/index.php/flore/index-de-la-flore" class="read_more" target="_blank">              
                        <h4>Index de la flore vasculaire de La Réunion</h4>                    
                        <p>Informations générales sur la flore vasculaire de Réunion (taxonomie, systématique, nomenclature, statuts, distributions, 
                            noms vernaculaires, étymologie des noms latins, etc.)
                        </p>
                        
                            Accéder au site &nbsp;<i class="fa fa-external-link">  </i>
                            </a> 
                    </div>
                </div>



                
                
                <div class="col-lg-4 col-md-4 col-sm-4">
                    <div class="single_post wow fadeInUp">
                    <a href="http://mascarine.cbnm.org/index.php/telechargements" class="read_more" target="_blank">                    
                        <h4>Téléchargements</h4>                    
                        <p> 
                        </p>
                        
                            Accéder aux téléchargements &nbsp;<i class="fa fa-external-link">  </i>
                            </a> 
                    </div>
                    
                </div>

                
                 
            </div>
            
            <div class="row"> 
                         
                <!-- RHUM -->
                <div class="col-lg-4 col-md-4 col-sm-4">
                    <div class="single_post wow fadeInUp">
                    <a href="http://rhum.cbnm.org" class="read_more" target="_blank">
                        <h4>RHUM, Restauration d'Habitats Uniques au Monde</h4>
                        <p>Projet de renforcement et de restauration d'espèces menacées au sein de milieux naturels de La Réunion 
                            (présentation, résultats et suivi du projet)</p>                                
                        
                            Accéder au site &nbsp;<i class="fa fa-external-link">  </i>
                        </a>
                    </div>
                </div> 
                  
                 <!-- DAUPI -->
                <div class="col-lg-4 col-md-4 col-sm-4">
                    <div class="single_post wow fadeInUp">
                    <a href="http://daupi.cbnm.org" class="read_more" target="_blank">
                        <h4>DAUPI</h4>
                        <p>Site du projet Démarche Aménagement Urbain et Plantes Indigènes (présentation du projet, liste et 
                            fiches descriptives des espèces, itinéraires techniques de production, outil d'aide à l'élaboration d'une palette végétale, annuaire des acteurs)</p>                                
                        
                            Accéder au site &nbsp;<i class="fa fa-external-link">  </i>
                        </a>
                    </div>
                </div> 
                
            </div>
            
            
            <div class="row">
                <div class="col-lg-12 col-md-12 text-center">
                   
                <h3 style="text-transform: uppercase;"><img src="img/logos/MAYOTTE.png" alt="Mayotte">  Mayotte</h3>
                </div>

                <!-- MASCARINE-MAYOTTE -->
                <div class="col-lg-4 col-md-4 col-sm-4">
                    <div class="single_post wow fadeInUp">
                    <a href="http://mascarine-mayotte.cbnm.org" class="read_more" target="_blank">
                        <h4>Mascarine Mayotte</h4>
                        <p>
                            Plate-forme web de diffusion et de saisie de données géographiques sur la flore de Mayotte (index de la flore de Mayotte, 
                            répartition géographique de la flore)
                        </p>
                        
                            Accéder au site &nbsp;<i class="fa fa-external-link">  </i>
                        </a>                  
                    </div>
                </div>     

                <!-- FLORE-MAYOTTE -->
                <div class="col-lg-4 col-md-4 col-sm-4">
                    <div class="single_post wow fadeInUp">       
                    <a href="http://floremaore.cbnm.org" class="read_more" target="_blank">             
                        <h4>Index de la flore vasculaire de Mayotte</h4>                    
                        <p>Informations générales sur la flore vasculaire de Mayotte (taxonomie, systématique, nomenclature, statuts, distributions, 
                            noms vernaculaires, étymologie des noms latins, etc.)
                        </p>
                        
                            Accéder au site &nbsp;<i class="fa fa-external-link">  </i>
                        </a> 
                    </div>
                </div>
            </div>

            <!-- ILES EPARSES -->
            <div class="row">
            
                <div class="col-lg-12 col-md-12 text-center">
                <h3 style="text-transform: uppercase;"><img src="img/logos/IE.png" alt="Iles Eparses">  Iles Eparses</h3>
                </div>
                
                <div class="col-lg-4 col-md-4 col-sm-4">
                    <div class="single_post wow fadeInUp">
                    <a href="http://ileseparses.cbnm.org" class="read_more" target="_blank">
                        <h4>Flore et végétation des Îles Éparses</h4>
                        <p>Site sur la flore et la végétation des Îles Éparses (actualités, découverte des îles, histoire de la botanique, 
                            missions et programme du CBN-CPIE Mascarin, flore et végétation)</p>                                
                        
                            Accéder au site &nbsp;<i class="fa fa-external-link">  </i>
                        </a>
                    </div>
                </div>  

                <!-- EEE-EUROPA -->
                <div class="col-lg-4 col-md-4 col-sm-4">
                    <div class="single_post wow fadeInUp">
                    <a href="http://ileseparses.cbnm.org/lutte_eee" class="read_more" target="_blank">
                        <h4>Lutte contre les EEE sur Europae</h4>
                        <p>Plate-forme à composante cartographique des actions de lutte et de suivi contre le Choca et le Sisal sur l'île d'Europa</p>                                
                        
                            Accéder au site &nbsp;<i class="fa fa-external-link">  </i>
                        </a>
                    </div>
                </div>    

               

            </div>
        </div>
    <!--</section>-->
    <!--=========== END RESSOURCES SECTION ================-->
    

    <!--=========== START CONTACT SECTION ================-->
    <section id="contact">
        
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12">
                    <article>
                        <h2 class="wow fadeInLeftBig">Contact</h2>
                    </article>
                </div>
            </div>
        
            <!--=========== START CONTACT FEATURE SECTION ================-->
            <div id="contactFeature">

                <!-- SKILLS COUNTER OVERLAY -->
                <div class="slider_overlay"></div>

                <div class="row">
                    <div class="col-lg-12 col-md-12">       
                        <div class="container">               
                            <div class="contact_feature">



                            </div>
                        </div>         
                    </div>
                </div>
            </div>
        
            <div class="contact_content">
            
                <div class="row">

                    <!-- BEGIN CONTACT FORM -->
                    <div class="col-lg-5 col-md-5 col-sm-5" style="margin-top: 90px;">
                        <div class="contact_form">

                            <!-- FOR CONTACT FORM MESSAGE -->
                            <div id="form-messages">

                            </div>

                            <form action="mail.php" method="post"
                                    id="mail_form" name="mail_form">
                                  <input class="form-control" type="text" placeholder="Nom" required=""
                                         id="mail_name" name="mail_name" aria-label="Nom" role="textbox"
                                         value="<?php echo $datas['mail_name']?>">
                                  <input class="form-control" type="email" placeholder="Adresse mail" required=""
                                         id="mail_email" name="mail_email" aria-label="Adresse mail" role="textbox"
                                         value="<?php echo $datas['mail_email']?>">
                                  <input class="form-control" type="text" placeholder="Sujet" 
                                         id="mail_subject" name="mail_subject" aria-label="Sujet" role="textbox"
                                         value="<?php echo $datas['mail_subject']?>">
                                  <textarea class="form-control" cols="30" rows="10" placeholder="Votre message" required 
                                          id="mail_content"  name="mail_content" aria-label="Contenu du mail" role="textbox"><?php echo $datas['mail_content']?></textarea>
                                  
                                  <input type="checkbox" required=""> 
                                    <cite>
                                        <i>
                                        CBN-CPIE MASCARIN traite les données recueillies pour permettre aux visiteurs du site WEB de communiquer avec le conservatoire.
                                        Pour en savoir plus sur la gestion de vos données personnelles et pour exercer vos droits, reportez-vous à la notice <a href="politiquedeconfidentialite.php">ci-jointe</a>.
                                        </i>
                                    </cite> 
                                  
                                    

                                  <input class="submit_btn" type="submit" value="Envoyer" >  

                                  <input type="hidden" id="mail_send" name="mail_send" value="">
                            </form>

                        </div>
                    </div>
                    <!-- START CONTACT MAP -->
                    <div class="col-lg-7 col-md-7 col-sm-7">
                    <a href="tel:+2620262242725"><div class="col-lg-3 col-md-3 col-sm-6">
                                  <div class="contact_feature_item wow fadeInUp">
                                  <i class="fa fa-phone"></i>
                                    <h4>Téléphone</h4>
                                    <p>0262 24 27 25</p>          
                                  </div>
                                </div></a>  

                                <a href="mailto:cbnm@cbnm.org">
                                <div class="col-lg-3 col-md-3 col-sm-6">
                                  <div class="contact_feature_item wow fadeInUp">
                                    <i class="fa fa-envelope-o"></i>
                                    <h4>Email</h4>
                                    <p>cbnm@cbnm.org</p>
                                  </div>
                                </div>  
                                </a> 

                                <a href="https://www.google.com/maps/place/Conservatoire+Botanique+National+de+Mascarin+(CBN-CPIE+Mascarin)/@-21.135475,55.2856976,14z/data=!4m12!1m6!3m5!1s0x218290b4e684df2f:0xbea92941da0b9611!2sConservatoire+Botanique+National+de+Mascarin+(CBN-CPIE+Mascarin)!8m2!3d-21.1377166!4d55.2954769!3m4!1s0x218290b4e684df2f:0xbea92941da0b9611!8m2!3d-21.1377166!4d55.2954769">  
                                <div class="col-lg-6 col-md-6 col-sm-6">
                                  <div class="contact_feature_item wow fadeInUp">
                                    <i class="fa fa-map-marker"></i>
                                    <h4>Adresse</h4>
                                    <p>2, rue du Père Georges 97436 Saint-Leu</p>
                                  </div>
                                </div>
                                </a>

                                  
                      <div class="contact_map">
                      <!-- START GOOGLE MAP -->
                      
                      
                      <br>
                        <div id="map_canvas">
                            
                            <a href="https://www.google.com/maps/dir/Roland+Garros+Airport,+Avenue+Roland+Garros,+Sainte-Marie,+R%C3%A9union/Conservatoire+Botanique+National+de+Mascarin+(CBN-CPIE+Mascarin),+2+Rue+du+Pere+Georges,+97436,+La+R%C3%A9union/@-21.0081659,55.2395446,11z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x217880368e686781:0xce75e3ac44104cca!2m2!1d55.512241!2d-20.8915972!1m5!1m1!1s0x218290b4e684df2f:0xbea92941da0b9611!2m2!1d55.2954769!2d-21.1377166!3e0">
                                <img data-src="img/map.JPG" class="lazyload img-fluid rounded" alt="map" width="80%">
                            </a>                       
                        </div>
                      </div>
                    </div>           
                </div>
            </div>
        </div>
        <!--=========== END CONTACT FEATURE SECTION ================-->
     </section>
    

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
                <a href="#contact" onclick="bannierecookie.userInterface.openPanel();">Gestion de cookies</a>

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
    //(bannierecookie.job = bannierecookie.job || []).push('facebooklikebox');
    </script>
  
     <!-- initialize jQuery Library -->
     <script src="js/jquery.min.js"></script>

     <!-- Facebook -->
    <!-- Google map -->
    <script src="js/lazysizes.min.js" async></script>
    
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

