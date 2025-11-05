<template>
    <div class="header">
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
</template>

<style scoped lang="scss">
.header {
    width: $header-width;
    height: 121px;
    margin-inline: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &__logo {
        width: 84px;
        height: 25px;
    }

    &__united-kingdom {
        width: 24px;
        height: 24px;
    }

    &__navigation {
        display: flex;
        align-items: center;
        gap: 90px;
    }

    &__menu {
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

    &__controls {
        display: flex;
        align-items: center;
        gap: 16px;
    }

    &__lang {
        width: 52px;
        height: 52px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        border: 2px solid $button-color;
        cursor: pointer;

        &:hover {
            background: $button-color-hover;
        }
    }

    &__button {
        padding: 16px 32px;
        color: $white;
        background: $button-color-active;
        border-radius: 99px;
        cursor: pointer;
        text-decoration: none;
        font-size: 20px;
        font-weight: 400;
    }
}
</style>
