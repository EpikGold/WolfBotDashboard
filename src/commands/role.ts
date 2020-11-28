import { Command, CommandContext, Permission } from './command';
import { MessageEmbed } from 'discord.js';
import { getRoleFromMention } from '../utils/command-utils';

export default class RoleCommand implements Command {
    precondition: Permission = '';
    name = 'role';
    summary = 'Получить информацию о определённой роли.';
    cooldown = 1;
    usage = 'role [роль]';
    module = 'General';
    
    execute = async(ctx: CommandContext, roleMention: string) => {
        const role = getRoleFromMention(roleMention, ctx.guild);
        
        const emojiBoolean = (condition) => condition ? '✅' : '❌';

        return ctx.channel.send(new MessageEmbed({
            color: role.color,
            title: `@${role.name}`,
            fields: [
                { name: 'ID роли', value: `\`${role.id}\``, inline: true },
                { name: 'Создана', value: `\`${role.createdAt.toDateString()}\``, inline: true },
                { name: 'Позиция роли', value: `\`${role.position}\``, inline: true },
                { name: 'Пользователи с данной ролью', value: `\`${role.members.size}\``, inline: true },
                { name: 'Упоминаемость', value: emojiBoolean(role.mentionable), inline: true },
                { name: 'Админские Права', value: emojiBoolean(role.managed), inline: true },
            ]
        }).setThumbnail(ctx.guild.iconURL()));
    }
}
