import { CommanderStatic } from 'commander'

declare namespace burnish {
	interface BurnishCli {
		/**
		 * Check node version required >=9.0
		 */
		checkNodeVersion: (wanted: string, id: string) => void
		/**
		 * downloadFromGithub git respositories
		 */
		downloadFromGithub: (url: string, name: string) => Promise
		/**
		 * enhanceErrorMessages for burnish@cli
		 */
		enhanceErrorMessages: (program: CommanderStatic, methodName: string, log: any) => void
		/**
		 * suggestCommands for burnish@cli
		 */
		suggestCommands: (program: CommanderStatic, cmd: any) => void
		/**
		 * createApp
		 */
		createApp: (projectName: string) => void
		/**
		 * createVueApp
		 */
		createVueApp: (projectName: string, targetDir: string) => void
		/**
		 * createReactApp
		 */

		createReactApp: (projectName: string, targetDir: string) => void
		/**
		 * createFlutterApp
		 */
		createFlutterApp: (projectName: string, targetDir: string) => void
	}
}
declare const burnishCli: burnish.BurnishCli
export = burnishCli