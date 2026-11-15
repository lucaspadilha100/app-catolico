#!/bin/sh
base="${VERCEL_GIT_PREVIOUS_SHA:-HEAD^}"
git cat-file -e "$base^{commit}" 2>/dev/null || exit 1
git diff --quiet "$base" HEAD -- . ':(exclude)fontes' ':(exclude)docs' ':(exclude)supabase' ':(exclude)scripts'
[ $? -eq 0 ] && exit 0 || exit 1
