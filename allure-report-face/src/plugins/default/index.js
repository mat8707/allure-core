import allurePlugins from '../../pluginApi';
import OverviewLayout from '../../layouts/overview/OverivewLayout';

allurePlugins.addTab('', {
    title: 'Home', icon: 'fa fa-home',
    route: '',
    onEnter: () => new OverviewLayout()
});
