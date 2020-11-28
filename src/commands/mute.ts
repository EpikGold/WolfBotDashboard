import { Command, CommandContext, Permission } from './command';
import AutoMod from '../modules/auto-mod/auto-mod';
import Deps from '../utils/deps';
import { getMemberFromMention, parseDuration } from '../utils/command-utils';

export default class MuteCommand implements Command {
    precondition: Permission = 'MUTE_MEMBERS';
    name = 'mute';
    usage = `mute <@пользователь> [время = 'Неопределено']`;
    summary = 'Выдача мута пользователю.';
    cooldown = 3;
    module = 'Auto-mod';
    
    constructor(
        private autoMod = Deps.get<AutoMod>(AutoMod)) {}
    
    execute = async(ctx: CommandContext, targetMention: string, ...args: string[]) => {
        const target = getMemberFromMention(targetMention, ctx.guild);
        
        const reason = args?.join(' ') || 'Неопределено';
        await this.autoMod.mute(target, { instigator: ctx.user, reason });

        await ctx.channel.send(`<@!${target.id}> замучен на \`${reason}\``);
    };
}
