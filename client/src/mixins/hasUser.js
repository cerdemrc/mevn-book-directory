export default{
    mounted() {
        if (!this.$store.state.auth.initialState.user) {
          this.$router.push("/login");
        }
    },
}