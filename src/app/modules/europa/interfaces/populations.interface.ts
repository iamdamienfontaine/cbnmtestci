
export interface PopulationItem {
    id: number,
    pop_id: number
    json: PopulationJson,
    pop_coordx: number,
    pop_coordy: number,
    pop_date: number,
    pop_etat: string,
    pop_ile_id: number,
    pop_localite: string,
    pop_lutte_new: number,
    pop_lutte_surf: number,
    pop_statut: string,
    pop_suivi_mois: number,
    pop_suivi_new: string,
    pop_surf: number,
    pop_taxon_id: number,
    pop_typologie: number,
    taxon: TaxonItem,
    pop_suivi_surf: number
};

export interface PopulationJson {
    nb_tot_bulb: number,
    periode_prochain_suivi: string,
    pop_eradiquee: string,
    pop_lutte_rem: string,
    pop_parasites: string,
    pop_perimetre: number,
    pop_rem_gestion: string,
    pop_stade: string,
    pop_station_prioritaire: string
    pop_suivi_dynreg: string,
    pop_suivi_rem: string,
    eradication_initiale: any
}

export interface TaxonItem {
    taxon_id: number,
    taxon_lib: string,
    taxon_nom_vernaculaire: string,
}

export interface PopulationItemBilan {
    actions: {
        ct_actions: number,
        ct_h_tot: string,
        ct_mat_coupe: number,
        ct_nb_arrache: number,
        ct_nb_ident: number,
        ct_pds_bulbe: string,
        date_action_max: number
    },
    suivis: {
        ct_h_tot: number,
        ct_nb_arrache: number,
        ct_nb_ident: number,
        ct_pds_bulbe: number,
        ct_suivis: number,
        date_suivi_max: number,
    }
}
