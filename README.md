# Initial setups
1. Remove everything from the dock
1. Set dock to autohide
1. Set capslock to be control
1. Tab for all controls
1. Change spotlight shortcut to be ctrl-space
1. Change repeat speed for keyboard (fast, almost no delay)

# Shell setup
1. `sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"`
1. `git clone git://github.com/ndbroadbent/scm_breeze.git ~/.scm_breeze && ~/.scm_breeze/install.sh && source .zshrc`

# Install Homebrew
1. `/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`

# Install Git
`brew install git`

# Install dotfiles
1. `git clone https://github.com/whw/dotfiles.git`
1. `cp dotfiles/whw.zsh-theme .oh-my-zsh/themes/whw.zsh-theme`
1. `ln -s dotfiles/zshrc .zshrc`
1. `source .zshrc`
1. `ln -s dotfiles/slate .slate`
1. `ln -s dotfiles/slate.js .slate.js`
1. `ln -s dotfiles/gitignore_global .gitignore_global`
1. `ln -s dotfiles/gitconfig .gitconfig`

# Install Homebrew Cask
`brew tap caskroom/cask`

# Install Casks
1. `brew cask install google-chrome`
1. `brew cask install slate`
1. `brew cask install 1password`
1. `brew cask install harvest`
1. `brew cask install slack`
1. `brew cask install flowdock`
1. `brew cask install sublime-text`
1. `brew cask install gitkraken`

# Install Highfive
