ZSH_THEME_GIT_PROMPT_PREFIX="("
ZSH_THEME_GIT_PROMPT_SUFFIX=") "

# Left prompt
PROMPT='%(?:%{$fg[green]%}:%{$fg[red]%})%c $(git_prompt_info)⚡  %{$reset_color%}'

# Right prompt
RPROMPT='%t'