import type { Asset } from '$lib/types';
import { theme } from '$lib/stores/theme';
import { base } from '$app/paths';

const gh = (file: string) => `${base}/logos/${file}`;

const a = (light: string, dark?: string): Asset =>
	dark ? { dark: gh(dark), light: gh(light) } : gh(light);

const Assets = {
	DBDPerkMaker: a('dbdperkmaker.png'),
	Blog: a('blog.png'),
	Scramblecoin: a('scramblecoin.png'),
	ZombieApocalypse: a('zombieapocalypse.png'),
	Commerce: a('commerce.png'),
	FamilyFeud: a('familyfeud.png'),
	Jeopardy: a('jeopardy.png'),
	Chess: a('chess.png'),
	Risk: a('risk.png'),
	Battleship: a('battleship.png'),
	Discord: a('discord.png'),
	Reddit: a('reddit.png'),
	Stardew: a('stardew.png'),
	Calculator: a('calculator.png'),
	Grocery: a('grocery.png'),

	Concordia: a('concordia.png'),
	Vanier: a('vanier.png'),

	Cryopak: a('cryopak.png'),
	Croogloo: a('croogloo.png'),
	Airbus: a('airbus.png'),
	Genetec: a('genetec.png'),
	Laurus: a('laurus.png'),
	StudentWorks: a('studentworks.png'),
	Tutor: a('tutor.png'),

	Powerpoint: a('powerpoint.png'),
	Word: a('word.png'),
	Excel: a('excel.png'),
	SonyVegas: a('sonyvegas.png'),
	Eclipse: a('eclipse.png'),
	VSCode: a('vscode.png'),
	GoogleCloud: a('googlecloud.png'),
	Unity: a('unity.png'),
	GitHub: a('github.png'),
	MySQL: a('mysql.png'),
	PHP: a('php.png'),
	SQLite: a('sqlite.png'),
	Jira: a('jira.png'),
	Figma: a('figma.png'),
	AndroidStudio: a('androidstudio.png'),

	AWS: a('aws.svg'),
	Bootstrap: a('bootstrap.png'),
	C: a('c.png'),
	Cpp: a('cpp.png'),
	Celery: a('celery.svg'),
	Django: a('django.svg'),
	FastApi: a('fastapi'),
	Flask: a('flask.svg'),
	Go: a('go.svg'),
	Kafka: a('kafka.svg'),
	Neo4j: a('neo4j.svg'),
	Nginx: a('nginx.svg'),
	Numpy: a('numpy.svg'),
	Pandas: a('pandas.svg'),
	RabbitMQ: a('rabbitmq.svg'),
	Rust: a('rust.svg', 'rust-dark.png'),
	Scrapy: a('scrapy.png'),
	Selenium: a('selenium.svg'),
	Docker: a('docker.svg'),
	Kubernetes: a('kubernetees.svg'),
	Csharp: a('csharp.png'),
	Xamarin: a('xamarin.svg'),
	TypeScript: a('ts.png'),
	VueJs: a('vue.png'),
	ReactJs: a('react.svg'),
	Dart: a('dart.png'),
	Kotlin: a('kotlin.png'),
	Python: a('python.png'),
	NodeJs: a('node.png'),
	Deno: a('deno.png', 'deno-dark.png'),
	Svelte: a('svelte.png'),
	ExpressJs: a('express.png'),
	JavaScript: a('js.png'),
	Fastify: a('fastify.svg', 'fastify-dark.png'),
	NestJs: a('nest.svg'),
	Quasar: a('quasar.svg'),
	SolidJs: a('solid.svg'),
	Electron: a('electron.png'),
	Flutter: a('flutter.svg'),
	Java: a('java.png'),
	AdonisJs: a('adonis.png'),
	Android: a('android.png'),
	Angular: a('angular.png'),
	PostgreSQL: a('postgres.png'),
	Firebase: a('firebase.png'),
	Sass: a('sass.png'),
	Unknown: a('no-img.svg'),
	MongoDB: a('mongodb.svg'),
	Redis: a('redis.svg'),
	Tailwind: a('tailwind.svg'),
	HTML: a('html.svg'),
	Premiere: a('premiere.png'),
	Photoshop: a('photoshop.png'),
	CSS: a('css.svg'),
	AfterEffects: a('after-effects.svg'),
	Illustrator: a('illustrator.svg'),
	Nuxt: a('nuxt.png'),
	Vite: a('vite.png'),
	Vitest: a('vitest.svg'),
	Jest: a('jest.png'),
	Unocss: a('unocss.svg'),
	Ruvy: a('ruvy.svg'),
	Postcss: a('postcss.svg')
};

export default Assets;

let currentTheme: boolean;

theme.subscribe((v) => (currentTheme = v));

export const getAssetURL = (asset: Asset): string => {
	return typeof asset === 'string' ? asset : currentTheme ? asset.dark : asset.light;
};
