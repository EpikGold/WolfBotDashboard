import { Command, CommandContext, Permission } from './command';
import { MessageEmbed } from 'discord.js';
import config from '../../config.json';

export default class InfoCommand implements Command {
    precondition: Permission = '';
    name = 'info';
    summary = 'Получение информации о WolfBot';
    cooldown = 1;
    module = 'General';
    
    execute = async(ctx: CommandContext) => {
        const uptimeHours = (ctx.bot.uptime / 1000 / 60 / 60).toFixed(2);

        return ctx.channel.send(new MessageEmbed({
            title: `**__${ctx.bot.user.tag} Информация__**`,
            fields: [
                { name: 'Создан', value: `\`${ctx.bot.user.createdAt.toDateString()}\``, inline: true },
                { name: 'Создатель', value: `<@!${config.bot.ownerId}>`, inline: true },
                { name: 'ID бота', value: `\`${ctx.bot.user.id}\``, inline: true },
                { name: 'IQ-Коэффициент', value: `\`1000\``,  inline: true },
                { name: 'Шардов', value: `\`${ctx.bot.shard?.count ?? 0}\``, inline: true },
                { name: 'Время работы', value: `\`${uptimeHours} hours\``, inline: true }
            ],
            
        }).setThumbnail(ctx.bot.user.avatarURL()));
    }
}
