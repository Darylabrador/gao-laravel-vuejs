/**
 * Recupérer la donnée passer dans la composante 
 * et la transformer en object via le return
 */
export default {
    props: {
        ordinateurId: {
            default: function() {
                return {}
            }
        },
        ordinateurName: {
            default: function () {
                return {}
            }
        }
    }
}