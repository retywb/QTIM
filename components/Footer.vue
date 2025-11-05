<script setup lang="ts">
const contacts = [
    {
        title: 'For all questions',
        tel: {
            title: '+7 (920) 278—00—68',
            value: '+7920278006'
        },
        mail: 'qtim@agency.com'
    },
    {
        title: 'Office in Russia',
        description: '139 Ruben Station Lake Drew, NM 52678',
        icon: 'tg'
    },
    {
        title: 'Office in Dubai',
        description: '139 Ruben Station Lake Drew, NM 52678',
        icon: 'tg'
    },
]

const socialLinksLeft = [
    {
        title: 'Facebook',
        href: '#'
    },
    {
        title: 'Instagram',
        href: '#'
    },
    {
        title: 'Telegram',
        href: '#'
    }
]

const socialLinksRight = [
    {
        title: 'Behance',
        href: '#'
    },
    {
        title: 'Linkedn',
        href: '#'
    },
    {
        title: 'Privacy Policy',
        href: '#'
    }
]
</script>

<template>
    <div id="footer" class="footer">
        <div class="footer__content">
            <div class="footer__there">Is there a project?</div>

            <div class="footer__info">
                <div class="footer__about">
                    Let’s work together
                </div>

                <div class="footer__contacts">
                    <div
                        v-for="(contact, index) in contacts"
                        :key="index"
                        class="footer__contact"
                        >
                        <div v-if="contact.title" class="footer__contact-title">{{ contact.title }}</div>

                        <a v-if="contact.tel" :href="`tel:${contact.tel.value}`">{{ contact.tel.title }}</a>

                        <a v-if="contact.mail" :href="`mailto:${contact.mail}`">{{ contact.mail}}</a>

                        <div v-if="contact.description">{{ contact.description }}</div>

                        <Icon v-if="contact.icon" :name="contact.icon" view-box="-1 0 34 32" class="footer__contact-icon"/>
                    </div>
                </div>
            </div>

            <div class="footer__links">
                <div class="footer__circle" />

                <div>
                    <a v-for="link in socialLinksLeft"
                        :key="link.title"
                        :href="link.href">
                        {{ link.title }}
                    </a>
                </div>

                <div>
                    <a v-for="link in socialLinksRight"
                        :key="link.title"
                        :href="link.href">
                        {{ link.title }}
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.footer {
    position: relative;
    overflow-y: hidden;
    padding-top: 140px;
    height: 900px;
    background-color: $purple;
    display: flex;
    justify-content: center;

    &__content {
        width: $content-width;
    }

    &__there {
        font-size: 16px;
        line-height: 120%;
        letter-spacing: 1%;
        margin-bottom: 56px;
    }

    &__about {
        width: 504px;
        font-size: 112px;
        line-height: 100%;
    }

    &__info {
        display: flex;
        gap: 360px;
    }

    &__contacts {
        font-size: 16px;
        display: flex;
        flex-direction: column;
        gap: 36px;
    }
    
    &__contact {
        width: 160px;
    }
    
    &__contact-icon {
        margin-top: 8px;
        width: 32px;
        height: 32px;
    }

    &__contact-title {
        margin-bottom: 12px;
    }

    &__links {
        position: absolute;
        bottom: 0;
        padding-bottom: 30px;
        display: flex;
        justify-content: space-between;
        width: inherit;

        div {
            display: flex;
            gap: 32px;

            a {
                color: $text-color;
            }
        }
    }

    &__circle {
        position: absolute;
        background: $black;
        transform: translate(-50%);
        left: 50%;
        width: 358px;
        height: 358px;
        border-radius: 50%;
        bottom: -180px;
        display: flex;
        align-items: center;
        justify-content: center;
        &::after {
            content: 'Go';
            font-size: 32px;
            color: $white;
            transform: translateY(-40px);
        }
    }
}
</style>