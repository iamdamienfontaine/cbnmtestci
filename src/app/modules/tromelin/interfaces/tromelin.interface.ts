export interface TaxonItem {

    id: number,
    nom_botanique: string,
    nom_vernaculaire: string,
    nb_init_stations: number,
    nb_init_ind: string,
    surf_init: number,
    nb_lutte_tot: number,
    nb_suivi_tot: number,
    nb_dechets_tot: number,
    nb_global_tot: number,
    nb_agents_lutte: number,
    nb_agents_suivi: number,
    nb_agents_dechets: number,
    nb_agent_tot: number,
    nb_h_lutte: number,
    nb_h_suivi: number,
    nb_h_dechets: number,
    nb_h_tot: number,
    nb_h_nb_agent_lutte: number,
    nb_h_nb_agent_suivi: number,
    nb_h_nb_agent_dechets: number,
    nb_h_nb_agent_tot: number,
    nb_drageon: number,
    nb_bouture: number,
    nb_plantule: number,
    nb_juvenile: number,
    nb_adulte: number,
    nb_ind_tot: string,
    nb_fleur_fruit: number,
    nb_bibag_noix: number,
    proportion_ind_traites: string,
    eradication_initiale: string,
    eradication_finale: string,
    besoin_lutte: string,
    besoin_suivi: string,
    etat_class: string,
    etat_label: string,
    notes: string
}



export interface ActionItem {
    id: number,
    taxon_id: number,
    date: string,
    type_action: string,
    libelle: string,
    acteur: string,
    operateurs: string,
    nb_personnes: number,
    h_deb: string,
    h_fin: string,
    h_tot_min: number,
    h_tot_personnes: number,
    stades_bio : string,
    methodes: string,
    traitements: string,
    resultats: any,
    eradication_initiale: string,
    eradication_finale: string,
    suivi: number,
    remarques: string,
}



export interface ActionsHttpResponse {
    items: ActionItem[],
    rowCount: number
}