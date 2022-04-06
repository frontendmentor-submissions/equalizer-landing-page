import { build } from 'esbuild'
import { clean } from 'esbuild-plugin-clean'
import { htmlPlugin } from '@craftamap/esbuild-plugin-html'
import { svgrPlugin } from 'esbuild-svgr-plugin'

const args = process.argv.slice(2)
const watch = args.includes('--watch')

build({
    watch,
    bundle: true,
    entryPoints: ['src/app.tsx'],
    outdir: 'dist',
    metafile: true,
    entryNames: '[name].[hash]',
    loader: {
        '.png': 'file',
        '.svg': 'file',
    },
    plugins: [
        clean({ patterns: ['./dist/**/*'] }),
        htmlPlugin({
            files: [
                {
                    entryPoints: ['src/app.tsx'],
                    filename: 'index.html',
                    htmlTemplate: `
                    <!DOCTYPE html>
                    <html lang="en">
                    <head>
                        <title>Equalizer Landing Page</title>
                        <meta charset="UTF-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <link rel="preconnect" href="https://fonts.googleapis.com">
                        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;700&display=swap" rel="stylesheet">
                    </head>
                    <body>
                        <div id="root">
                        </div>
                    </body>
                    </html>
                  `,
                },
            ],
        }),
        svgrPlugin(),
    ],
})
