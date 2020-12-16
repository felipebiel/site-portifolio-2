export default {
    name: 'Nav',
    data() {
        return {
            showMenu: false,
            whereLinkActive: 'home'
        }
    },
    methods: {
        ActiveLinkMenu(where) {
            this.whereLinkActive = where;
            this.showMenu = false;
        }
    },
}