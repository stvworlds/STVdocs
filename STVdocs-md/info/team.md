---
layout: page
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: 'https://cdn.discordapp.com/avatars/972973957147942932/845f4a381a5af1d458ef8de10763103d.webp?size=1024',
    name: 'AcuraON',
    title: 'Власник',
    links: [
      { icon: 'discord', link: 'https://discord.com/channels/@me/1157657832980742144' },
      { icon: 'twitch', link: 'https://twitch.tv/j2xxn' }
    ]
  },
  {
    avatar: 'https://cdn.discordapp.com/avatars/569423174576635945/7605f649695ab316ad699a536f7a2390.webp?size=1024',
    name: 'Maksim6opka',
    title: 'Технічний розробник',
    links: [
      { icon: 'discord', link: 'https://discord.com/channels/@me/1157657832980742144' }
    ]
  },
  {
    avatar: 'https://cdn.discordapp.com/avatars/501339120287612929/214240b0119686de6804ffefc8f172b2.webp?size=1024',
    name: 'meowknees',
    title: 'Креативний менеджер',
    links: [
      { icon: 'discord', link: 'https://discord.com/channels/@me/501339120287612929' }
    ]
  },
  {
    avatar: 'https://cdn.discordapp.com/avatars/698937861474615367/bb3c03054f214edd77877ec45be0922d.webp?size=1024',
    name: 'Okrilis',
    title: 'Модератор',
    links: [
      { icon: 'discord', link: 'https://discord.com/channels/@me/698937861474615367' }
    ]
  },
  {
    avatar: 'https://cdn.discordapp.com/avatars/745190113969045574/36c10318b295f1079626721490fcdc95.webp?size=1024',
    name: 'x1bbxd',
    title: 'Модератор',
    links: [
      { icon: 'discord', link: 'https://discord.com/channels/@me/745190113969045574' }
    ]
  },
  {
    avatar: 'https://cdn.discordapp.com/avatars/1004487778630914182/ca4698a206af4d0bfe8a981de577dfe4.webp?size=1024',
    name: 'int_ma1n',
    title: 'Веб розробник',
    links: [
      { icon: 'discord', link: 'https://discord.com/channels/@me/1004487778630914182' }
    ]
  },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Наша команда
    </template>
    <template #lead>
      Розробники, адміністратори, модератори серверу
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers :members />
</VPTeamPage>