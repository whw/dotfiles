# Initial setups
1. Remove everything from the dock
1. Set capslock to be control
1. Tab for all controls
1. Change spotlight shortcut to be ctrl-space

# Shell setup
1. `sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"`
1. `git clone git://github.com/ndbroadbent/scm_breeze.git ~/.scm_breeze && ~/.scm_breeze/install.sh && source .zshrc`

# Install Homebrew
1. `/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`

# Install Git
`brew install git`

# Install dotfiles
`git clone https://github.com/whw/dotfiles.git`

-- Install Homebrew files

brew tap homebrew/bundle
brew bundle
