# Initial setups
1. Remove everything from the dock
1. Set dock to autohide
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
`ln -s dotfiles/slate .slate`
`ln -s dotfiles/slate.js .slate.js`

# Install Homebrew Cask
`brew tap caskroom/cask`

# Install Casks
`brew cask install google-chrome`
`brew cask install slate`
`brew cask install 1password`
`brew cask install harvest`
`brew cask install slack`
`brew cask install flowdock`
`brew cask install sublime-text`

# Install Highfive
