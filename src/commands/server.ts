import { Command, CommandContext, Permission } from './command';
import { MessageEmbed } from 'discord.js';

export default class ServerCommand implements Command {
    precondition: Permission = '';
    name = 'server';
    summary = 'Получение информации о данном сервере.';
    cooldown = 1;
    module = 'General';
    
    execute = async(ctx: CommandContext) => {
        return ctx.channel.send(new MessageEmbed({
            title: `**__${ctx.guild.name}__**`,
            fields: [
                { name: 'Каналов', value: `\`${ctx.guild.channels.cache.size}\``, inline: true },
                { name: 'Создан', value: `\`${ctx.guild.createdAt.toDateString()}\``,  inline: true },
                { name: 'ID сервера', value: `\`${ctx.guild.id}\``, inline: true },
                { name: 'Пользователь', value: `\`${ctx.guild.members.cache.size}\``, inline: true },
                { name: 'Владелец', value: `<@!${ctx.guild.ownerID}>`, inline: true },
                { name: 'Ролей', value: `\`${ctx.guild.roles.cache.size}\``, inline: true }
            ],
            
        }).setThumbnail(ctx.guild.iconURL()));
    }
}
