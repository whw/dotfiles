# First off - remove everything from the dock

# Shell setup
1. `sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"`
1. `git clone git://github.com/ndbroadbent/scm_breeze.git ~/.scm_breeze && ~/.scm_breeze/install.sh && source .zshrc`

# Install Homebrew
1. `/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`

-- Install Homebrew files

brew tap homebrew/bundle
brew bundle
