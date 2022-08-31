cd frontend && \
quasar build && \
cd .. && \ 
rm -rf custom_module/assets/spa && \
cp -R frontend/dist/spa custom_module/assets/spa && \
cd custom_module && \
npm run dockerBuild && \
cd .. && \
mv 'custom_module/bp-report.tgz' 'bp-report.tgz'

