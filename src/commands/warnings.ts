import { Command, CommandContext, Permission } from './command';
import Members from '../data/members';
import { TextChannel } from 'discord.js';
import { MemberDocument } from '../data/models/member';
import Deps from '../utils/deps';
import { getMemberFromMention } from '../utils/command-utils';

export default class WarningsCommand implements Command {
    precondition: Permission = 'VIEW_AUDIT_LOG';
    name = 'warnings';
    usage = 'warnings <@пользователь>'
    summary = 'Получение списка варнов пользователя.';
    cooldown = 3;
    module = 'Auto-mod';

    constructor(
        private members = Deps.get<Members>(Members)) {}
    
    execute = async(ctx: CommandContext, userMention?: string, position?: string) => {
        const target = (userMention) ?
            getMemberFromMention(userMention, ctx.guild) : ctx.member;

        const savedMember = await this.members.get(target);
        
        if (position)
            return this.displayWarning(+position, savedMember, ctx.channel);

        await ctx.channel.send(`У пользователя \`${savedMember.warnings.length}\` варнов.`)
    }

    private async displayWarning(position: number, savedMember: MemberDocument, channel: TextChannel) {
        if (position <= 0 || position > savedMember.warnings.length)
            throw new TypeError('Варнов не обнаружено.');

        const warning = savedMember.warnings[position - 1];
        const instigator = channel.client.users.cache.get(warning.instigatorId);
        channel.send(`**Варн #${position}**\n**От**: <@!${instigator ?? 'N/A'}>\n**Причина**: \`${warning.reason}\``);
    }
}
