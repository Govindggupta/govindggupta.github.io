#!/bin/bash

mkdir -p public/icons/tech public/icons/contact

# Colored icons (single variant)
curl -o public/icons/tech/html5.svg https://cdn.simpleicons.org/html5
curl -o public/icons/tech/css3.svg https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg
curl -o public/icons/tech/javascript.svg https://cdn.simpleicons.org/javascript
curl -o public/icons/tech/typescript.svg https://cdn.simpleicons.org/typescript
curl -o public/icons/tech/python.svg https://cdn.simpleicons.org/python
curl -o public/icons/tech/java.svg https://cdn.simpleicons.org/openjdk
curl -o public/icons/tech/react.svg https://cdn.simpleicons.org/react
curl -o public/icons/tech/tailwindcss.svg https://cdn.simpleicons.org/tailwindcss
curl -o public/icons/tech/nodejs.svg https://cdn.simpleicons.org/nodedotjs
curl -o public/icons/tech/bun.svg https://cdn.simpleicons.org/bun
curl -o public/icons/tech/postgresql.svg https://cdn.simpleicons.org/postgresql
curl -o public/icons/tech/mysql.svg https://cdn.simpleicons.org/mysql
curl -o public/icons/tech/mongodb.svg https://cdn.simpleicons.org/mongodb
curl -o public/icons/tech/langchain.svg https://cdn.simpleicons.org/langchain
curl -o public/icons/tech/git.svg https://cdn.simpleicons.org/git
curl -o public/icons/tech/docker.svg https://cdn.simpleicons.org/docker
curl -o public/icons/tech/linux.svg https://cdn.simpleicons.org/linux

# Dual variant — dark versions (black icon, use on light bg)
curl -o public/icons/tech/nextjs-dark.svg https://cdn.simpleicons.org/nextdotjs
curl -o public/icons/tech/express-dark.svg https://cdn.simpleicons.org/express
curl -o public/icons/tech/github-dark.svg https://cdn.simpleicons.org/github
curl -o public/icons/tech/vercel-dark.svg https://cdn.simpleicons.org/vercel
curl -o public/icons/tech/vscode-dark.svg https://cdn.simpleicons.org/visualstudiocode

# Dual variant — light versions (white icon, use on dark bg)
curl -o public/icons/tech/nextjs-light.svg "https://cdn.simpleicons.org/nextdotjs/ffffff"
curl -o public/icons/tech/express-light.svg "https://cdn.simpleicons.org/express/ffffff"
curl -o public/icons/tech/github-light.svg "https://cdn.simpleicons.org/github/ffffff"
curl -o public/icons/tech/vercel-light.svg "https://cdn.simpleicons.org/vercel/ffffff"
curl -o public/icons/tech/vscode-light.svg https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg

# VS Code and Pinecone alternates
curl -o public/icons/tech/vscode-dark.svg https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg
cat <<'EOF' > public/icons/tech/pinecone.svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
  <path d="M12 3.5 6.8 6.5v6L12 15.5l5.2-3v-6L12 3.5Z" fill="#0F766E"/>
  <path d="M12 8.8 9.55 10.2v2.9L12 14.5l2.45-1.4v-2.9L12 8.8Z" fill="#14B8A6"/>
  <path d="M6.8 12.5v5L12 20.5l5.2-3v-5L12 15.5l-5.2-3Z" fill="#0D9488"/>
</svg>
EOF

# Contact icons
curl -o public/icons/contact/gmail.svg https://cdn.simpleicons.org/gmail
curl -o public/icons/contact/linkedin.svg https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg
curl -o public/icons/contact/github-dark.svg https://cdn.simpleicons.org/github
curl -o public/icons/contact/github-light.svg "https://cdn.simpleicons.org/github/ffffff"
curl -o public/icons/contact/x-dark.svg https://cdn.simpleicons.org/x
curl -o public/icons/contact/x-light.svg "https://cdn.simpleicons.org/x/ffffff"

echo "All icons downloaded successfully."
