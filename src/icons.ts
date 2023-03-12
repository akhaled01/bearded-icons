function icon(name: string): Record<string, { iconPath: string }> {
  return { [`_f_${name}`]: { iconPath: `./icons/${name}.svg` } };
}

function iconGeneric(name: string): Record<string, { iconPath: string }> {
  return { [`_${name}`]: { iconPath: `./icons/${name}.svg` } };
}

const icons = {
  ...iconGeneric("file"),
  ...iconGeneric("file_light"),
  ...iconGeneric("folder"),
  ...iconGeneric("folder_light"),
  ...iconGeneric("folder_open"),
  ...iconGeneric("folder_light_open"),
  ...iconGeneric("root_folder"),
  ...iconGeneric("root_folder_open"),
  ...iconGeneric("root_folder_light"),
  ...iconGeneric("root_folder_light_open"),
  ...icon("elm"),
  ...icon("sass"),
  ...icon("scss"),
  ...icon("less"),
  ...icon("stylus"),
  ...icon("postcssconfig"),
  ...icon("docker"),
  ...icon("dockerignore"),
  ...icon("dockerdebug"),
  ...icon("git"),
  ...icon("readme"),
  ...icon("html"),
  ...icon("json"),
  ...icon("rjson"),
  ...icon("markdown"),
  ...icon("markdownx"),
  ...icon("css"),
  ...icon("cssmap"),
  ...icon("js"),
  ...icon("jsmap"),
  ...icon("typescript"),
  ...icon("typescriptdef"),
  ...icon("tsx"),
  ...icon("vue"),
  ...icon("image"),
  ...icon("zip"),
  ...icon("yarn"),
  ...icon("yarnerror"),
  ...icon("error"),
  ...icon("npm"),
  ...icon("npmlock"),
  ...icon("svg"),
  ...icon("yaml"),
  ...icon("fontwoff2"),
  ...icon("fontwoff"),
  ...icon("fontttf"),
  ...icon("fontotf"),
  ...icon("fonteot"),
  ...icon("php"),
  ...icon("twig"),
  ...icon("composer"),
  ...icon("composerlock"),
  ...icon("symfony"),
  ...icon("xml"),
  ...icon("robots"),
  ...icon("bundler"),
  ...icon("stylelint"),
  ...icon("prettier"),
  ...icon("prettierignore"),
  ...icon("python"),
  ...icon("log"),
  ...icon("license"),
  ...icon("audio"),
  ...icon("audiomp3"),
  ...icon("audioogg"),
  ...icon("audiowav"),
  ...icon("audiowv"),
  ...icon("lua"),
  ...icon("csharp"),
  ...icon("dartlang"),
  ...icon("eslint"),
  ...icon("handlebars"),
  ...icon("webpack"),
  ...icon("ruby"),
  ...icon("erb"),
  ...icon("jest"),
  ...icon("babel"),
  ...icon("toml"),
  ...icon("elixir"),
  ...icon("exs"),
  ...icon("rust"),
  ...icon("rustfmt"),
  ...icon("reactjs"),
  ...icon("reactts"),
  ...icon("angular"),
  ...icon("rollup"),
  ...icon("java"),
  ...icon("gulp"),
  ...icon("grunt"),
  ...icon("editorconfig"),
  ...icon("light_editorconfig"),
  ...icon("shell"),
  ...icon("vscode"),
  ...icon("ai"),
  ...icon("photoshop"),
  ...icon("pdf"),
  ...icon("go"),
  ...icon("go_package"),
  ...icon("tmpl"),
  ...icon("svelte"),
  ...icon("browserslist"),
  ...icon("erlang"),
  ...icon("vite"),
  ...icon("mint"),
  ...icon("eex"),
  ...icon("env"),
  ...icon("nvm"),
  ...icon("sql"),
  ...icon("nginx"),
  ...icon("conf"),
  ...icon("c"),
  ...icon("cpp"),
  ...icon("hpp"),
  ...icon("powershell"),
  ...icon("powershelldata"),
  ...icon("powershellmodule"),
  ...icon("njk"),
  ...icon("blade"),
  ...icon("liquid"),
  ...icon("pug"),
  ...icon("cheader"),
  ...icon("m"),
  ...icon("swift"),
  ...icon("graphql"),
  ...icon("groovy"),
  ...icon("testjs"),
  ...icon("testts"),
  ...icon("storybook"),
  ...icon("wasm"),
  ...icon("imagepng"),
  ...icon("imagejpg"),
  ...icon("imagegif"),
  ...icon("imagewebp"),
  ...icon("imageico"),
  ...icon("cli"),
  ...icon("bat"),
  ...icon("nuxt"),
  ...icon("netlify"),
  ...icon("vercel"),
  ...icon("tailwind"),
  ...icon("windi"),
  ...icon("nodemon"),
  ...icon("jinja"),
  ...icon("haml"),
  ...icon("smarty"),
  ...icon("haskell"),
  ...icon("gradle"),
  ...icon("gradlekotlin"),
  ...icon("gradlebat"),
  ...icon("nim"),
  ...icon("nestjs"),
  ...icon("nestjscontroller"),
  ...icon("nestjsservice"),
  ...icon("nestjsmodule"),
  ...icon("nestjsguard"),
  ...icon("nestjsdecorator"),
  ...icon("nestjsfilter"),
  ...icon("jenkins"),
  ...icon("txt"),
  ...icon("binary"),
  ...icon("cert"),
  ...icon("key"),
  ...icon("prisma"),
  ...icon("compodoc"),
  ...icon("julia"),
  ...icon("csv"),
  ...icon("karma"),
  ...icon("tsconfig"),
  ...icon("travis"),
  ...icon("razor"),
  ...icon("cshtml"),
  ...icon("jsp"),
  ...icon("avi"),
  ...icon("mp4"),
  ...icon("mov"),
  ...icon("video"),
  ...icon("rescript"),
  ...icon("bsconfig"),
  ...icon("opengl"),
  ...icon("llvm"),
  ...icon("info"),
  ...icon("ipynb"),
  ...icon("sol"),
  ...icon("bicep"),
  ...icon("qt"),
  ...icon("ui"),
  ...icon("prolog"),
  ...icon("user"),
  ...icon("clojure"),
  ...icon("terraform"),
  ...icon("terraformversion"),
  ...icon("terraformvars"),
  ...icon("parcel"),
  ...icon("ocaml"),
  ...icon("ocamli"),
  ...icon("ocamly"),
  ...icon("ocamll"),
  ...icon("fsharp"),
  ...icon("dune"),
  ...icon("duneproject"),
  ...icon("adonis"),
  ...icon("adonisconfig"),
  ...icon("astro"),
  ...icon("astroconfig"),
  ...icon("godot"),
  ...icon("tscn"),
  ...icon("svelteconfig"),
  ...icon("toolversions"),
  ...icon("cmake"),
  ...icon("conan"),
  ...icon("cargo"),
  ...icon("cargolock"),
  ...icon("pnpm"),
  ...icon("pnpmlock"),
  ...icon("tauri"),
  ...icon("todo"),
  ...icon("nextconfig"),
  ...icon("nextron"),
  ...icon("hashicorp"),
  ...icon("sentinel"),
  ...icon("poetry"),
  ...icon("poetrylock"),
  ...icon("pyproject"),
  ...icon("cucumber"),
  ...icon("nix"),
  ...icon("flakelock"),
  ...icon("edge"),
  ...icon("ace"),
  ...icon("acemanifest"),
  ...icon("sqlite"),
  ...icon("knex"),
  ...icon("launch"),
  ...icon("redis"),
  ...icon("nvim"),
  ...icon("sequelize"),
  ...icon("tres"),
  ...icon("sln"),
  ...icon("suo"),
  ...icon("csproj"),
  ...icon("mesh"),
  ...icon("gbl"),
  ...icon("cypress"),
  ...icon("playright"),
  ...icon("vitest"),
  ...icon("vitest"),
  ...icon("flutter"),
  ...icon("flutterlock"),
  ...icon("flutterpackage"),
  ...icon("htaccess"),
  ...icon("nx"),
  ...icon("v"),
  ...icon("vmod"),
  ...icon("rego"),
  ...icon("scala"),
  ...icon("d"),
  ...icon("adoc"),
  ...icon("motoko"),
  ...icon("diff"),
  ...icon("quasar"),
  ...icon("quarkus"),
  ...icon("freemarker"),
  ...icon("properties"),
  ...icon("maven"),
  ...icon("manifest"),
  ...icon("kotlin"),
  ...icon("kotlins"),
  ...icon("jar"),
  ...icon("vhd"),
  ...icon("vhdl"),
  ...icon("crystal"),
  ...icon("makefile"),
  ...icon("version"),
  ...icon("commitlint"),
  ...icon("latex"),
  ...icon("perl"),
  ...icon("perlm"),
  ...icon("neon"),
  ...icon("zig"),
  ...icon("mjml"),
  ...icon("figma"),
  ...icon("imba"),
  ...icon("civet"),
  ...icon("drawio"),
  ...icon("terrafile"),
  ...icon("afdesign"),
  ...icon("afpub"),
  ...icon("afphoto"),
  ...icon("codeworkspace"),
};

export default icons;
