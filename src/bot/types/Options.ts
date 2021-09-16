/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  PermissionString,
  Message,
  ApplicationCommandOptionData,
  Interaction,
  ButtonInteraction,
  CommandInteractionOptionResolver, ContextMenuInteraction,
} from "discord.js";

export interface CommandOptions {
  name: string;
  aliases?: string[];
  description: string;
  usage?: string;
  cachedData?: boolean;
  category?: string;
  cooldown?: number;
  ownerOnly?: boolean;
  guildOnly?: boolean;
  requiredArgs?: number;
  userPermissions?: PermissionString[];
  clientPermissions?: PermissionString[];
  exec: (msg: Message, args: string[], prefix: string) => any | Promise<any>;
}

export interface InteractionCommandOptions {
  name: string;
  description?: string;
  cooldown?: number;
  options?: ApplicationCommandOptionData[] | undefined;
  exec: (
    interactions: Interaction,
    args: CommandInteractionOptionResolver
  ) => Promise<void>;
}

export type CommandType = Omit<CommandOptions, "exec">;
export type InteractionType = Omit<InteractionCommandOptions, "exec">;
export type ButtonType = Omit<ButtonOptions, "exec">;
export type MenuType = Omit<MenuOptions, "exec">

export interface EventOptions {
  name: string;
  once?: boolean;
}

export interface ButtonOptions {
  name: string;
  once?: boolean;
  exec: (interaction: ButtonInteraction) => Promise<void>;
}

export interface MenuOptions {
  name: string;
  type: number;
  exec: (interaction: ContextMenuInteraction) => Promise<void>
}
