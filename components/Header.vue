<template>
    <div class="header">
        <div class="header__content">
        <nuxt-link to="/">
            <Icon name="logo" view-box="-1 0 86 27" class="header__logo"/>
        </nuxt-link>

        <div class="header__navigation">
            <div class="header__menu">
                <div>Works</div>
                
                <div>
                    <nuxt-link :to="{hash: '#footer'}">About</nuxt-link>
                </div>
            </div>

            <div class="header__controls">
                <div class="header__lang">
                    <Icon name="united-kingdom" view-box="0 0 24 24" class="header__united-kingdom" />
                </div>

                <a
                    href="https://qtim.pro/"
                    class="header__button"
                    >
                    Let’s work
                </a>
            </div>
        </div>
    </div>
    </div>
</template>

<style scoped>
.header {
    display: flex;
    justify-content: center;
    position: sticky;
    top: 0;
    z-index: 1;
    background-color: var(--white);
}

.header__content {
    height: 121px;
    width: var(--header-width);
    margin-inline: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.header__logo {
    width: 84px;
    height: 25px;
}

.header__united-kingdom {
    width: 24px;
    height: 24px;
}

.header__navigation {
    display: flex;
    align-items: center;
    gap: 90px;
}

.header__menu {
    display: flex;
    gap: 51px;

    div {
        font-size: 20px;

        &:hover {
            cursor: pointer;
            text-decoration: underline;
        }
    }
}

.header__controls {
    display: flex;
    align-items: center;
    gap: 16px;
}

.header__lang {
    width: 52px;
    height: 52px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 2px solid var(--button-color);
    cursor: pointer;

    &:hover {
        background: var(--button-color-hover);
    }
}

.header__button {
    padding: 16px 32px;
    color: var(--white);
    background: var(--button-color-active);
    border-radius: 99px;
    cursor: pointer;
    text-decoration: none;
    font-size: 20px;
    font-weight: 400;
}
</style>
