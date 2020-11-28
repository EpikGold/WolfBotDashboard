import { Command, CommandContext, Permission } from './command';

export default class FlipCommand implements Command {
    precondition: Permission = '';
    name = 'flip';
    summary = 'Орёл или Решка?';
    cooldown = 1;
    module = 'General';
    
    execute = async(ctx: CommandContext) => {
        const result = (Math.random() >= 0.5) ? 'Орёл' : 'Решка';
        return ctx.channel.send(result);
    }
}
