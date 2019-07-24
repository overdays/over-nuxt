<template>
    <div>
        <form method="post">
            <input type="password" name="password"><br>
            <button>Go!</button>
        </form>
    </div>
</template>

<script>
export default {
    layout: 'join'
}
</script>

<style scoped>
    input, button {
        display: table;
        margin: 0 auto;
    }

    form {
        margin: 300px 0;
    }

    input {
        border: 1px solid black;
        border-radius: 50px;
        padding: 5px;
        outline: none;
    }

    button {
        border: 1px solid black;
        background: transparent;
        padding: 5px 70px;
        border-radius: 50px;
    }
</style>


